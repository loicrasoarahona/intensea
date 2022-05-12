import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class PracticeService {
    private imagesRetenir: any[] = [];
    private imagesChoisi: any[] = [];
    private imagesDeSession: any[] = [];
    private niveau: number = 0;

    // statiques
    private lesImages: any[] = [];
    private lesNiveaux: number[][] = [[1, 1], [1, 2], [2, 2], [2, 3], [3, 3]];

    // Subjects
    imagesRetenirSubject = new Subject<any[]>();
    imagesChoisiSubject = new Subject<any[]>();
    imagesDeSessionSubject = new Subject<any[]>();
    imagesCompletSubject = new Subject<boolean>();

    constructor() {
        // initialisation des variables statiques
        var data = JSON.parse('{"images":["001-mail inbox app.png","001-rubber duck.png","005-wheat.png","012-egg.png","013-orange juice.png","017-boomerang.png","022-beach ball.png","025-fruits.png","025-settings.png","032-guitar.png","035-tyrannosaurus.png","039-lettuce.png","043-cookies.png","043-kite.png","048-cupcake.png","048-fan.png","cerise.png","flocons-de-neige.png","iglou.png","laddu.png","lampe-de-bureau.png","lampe.png"]}');
        let i = 0;
        for (let imageName of data.images) {
            this.lesImages.push({ id: ++i, nom: imageName });
        }

        // initialisation des variables de la session
        this.initialiserVariablesSession();
    }

    public initialiserVariablesSession(nbRetenir: number = 0, nbDistractor: number = 0) {
        this.setLesImages(this.trierAleatoirement(this.lesImages));
        if (nbRetenir == 0 || nbDistractor == 0) {
            this.setNiveau(0);
            nbRetenir = this.lesNiveaux[this.niveau][0];
            nbDistractor = this.lesNiveaux[this.niveau][1];
        }

        this.setImagesChoisi([]);
        let imagesRetenir = [];
        for (var i = 0; i < nbRetenir; i++) {
            imagesRetenir.push(this.lesImages[i]);
        }
        this.setImagesRetenir(imagesRetenir);

        let imagesDeSession = [];
        for (var i = 0; i < nbRetenir + nbDistractor; i++) {
            imagesDeSession.push(this.lesImages[i]);
        }
        imagesDeSession = this.trierAleatoirement(imagesDeSession);
        this.setImagesDeSession(imagesDeSession);

    }


    trierAleatoirement(tableau: any[]): any[] {
        for (var i = 0; i < tableau.length; i++) {
            var iAleatoire = Math.floor((Math.random() * tableau.length * 10) % tableau.length);
            var temp = tableau[iAleatoire];
            tableau[iAleatoire] = tableau[i];
            tableau[i] = temp;
        }
        return tableau;
    }

    imagesChoisiComplet() {
        return this.imagesChoisi.length == this.imagesRetenir.length;
    }
    pushImageChoisi(image: any) {
        this.imagesChoisi.push(image);
        this.emitImagesChoisiSubject();
        this.emitImageCompletSubject();
    }

    getLesNiveaux () : number[][] {
        return this.lesNiveaux;
    }
    setImagesRetenir(imagesRetenir: any[]) {
        this.imagesRetenir = imagesRetenir
        this.emitImageRetenirSubject();
    }
    setImagesChoisi(imagesChoisi: any[]) {
        this.imagesChoisi = imagesChoisi
        this.emitImagesChoisiSubject();
    }
    setImagesDeSession(imagesDeSession: any[]) {
        this.imagesDeSession = imagesDeSession;
        this.emitImagesDeSessionSubject();
    }
    setLesImages(lesImages: any[]) {
        this.lesImages = lesImages;
    }
    setNiveau(niveau: number) {
        this.niveau = niveau;
    }

    // emit
    emitImageRetenirSubject() {
        this.imagesRetenirSubject.next(this.imagesRetenir.slice());
    }
    emitImagesChoisiSubject() {
        this.imagesChoisiSubject.next(this.imagesChoisi.slice());
    }
    emitImagesDeSessionSubject() {
        this.imagesDeSessionSubject.next(this.imagesDeSession.slice());
    }
    emitImageCompletSubject() {
        this.imagesCompletSubject.next(this.imagesChoisiComplet());
    }

    monterNiveau() : number {
        if(this.niveau<this.lesNiveaux.length-1) {
            this.niveau++;
            return this.niveau
        }
        return -1;
    }


}