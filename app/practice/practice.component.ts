import { Component, HostListener, OnDestroy, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PracticeService } from '../services/practice.service';
import { TuileComponent } from '../tuile/tuile.component';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit, OnDestroy {

  changingNiveau: boolean = false;

  // Les pages à afficher sont : presentation, jeu
  currentPage: string = 'presentation';

  decompte: number = 3.0;
  decompteAff: number = 0;


  // les images à afficher dans la grille
  imagesDistractor: any[] = [];
  imagesRetenir: any[] = [];

  imageComplet: boolean = true;

  // Subscriptions
  imagesDistractorSubscription: Subscription = new Subscription();
  imagesRetenirSubscription: Subscription = new Subscription();
  imageCompletSubscription: Subscription = new Subscription();

  // tuiles
  @ViewChildren(TuileComponent) viewTuiles!: QueryList<TuileComponent>

  constructor(
    private practiceService: PracticeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }



  init(retenir: number = 0, distractor: number = 0) {
    this.practiceService.initialiserVariablesSession(retenir, distractor);

    this.currentPage = 'presentation';

    this.decompte = retenir > 2 ? 3 : 2;
    this.decompter();

    this.setSubscriptions();
    this.dessiner();
  }



  ngOnInit() {
    var routeRetenir = parseInt(this.route.snapshot.queryParamMap.get('retenir'));
    var routeDistractor = parseInt(this.route.snapshot.queryParamMap.get('distractor'));

    if (routeRetenir > 0 && routeDistractor > 0) {
      this.init(routeRetenir, routeDistractor);
    } else {
      this.init();
    }


  }

  async decompter() {
    if (this.decompte > 0) {

      setTimeout(() => {
        this.decompte -= 0.01;
        this.decompteAff = Math.round(this.decompte);
        if (this.decompte <= 0) {
          this.decompte = 0;
          this.currentPage = 'croix_fixation';
          setTimeout(() => {
            this.currentPage = 'jeu';
            this.viewTuiles.forEach(tuile => tuile.ngOnInit())
          }, 1500);
        }
        this.decompter();
      }, 10);
    }
  }

  dessiner() {
    var canvas: any = document.getElementById('canvas');

    var ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgb(0, 200, 0)';

    // ligne centre vertical
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);

    // ligne centre horizontal
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);

    ctx.lineWidth = 0.5;

    // je trace les lignes verticales à gauche
    for (var i = canvas.width / 2; i >= 0; i -= 50) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
    }

    // je trace les lignes verticales à droite
    for (var i = canvas.width / 2; i <= canvas.width; i += 50) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
    }

    // je trace les lignes horizontales en haut
    for (var j = canvas.height / 2; j >= 0; j -= 50) {
      ctx.moveTo(0, j);
      ctx.lineTo(canvas.width, j);
    }

    // je trace les lignes horizontales en bas
    for (var j = canvas.height / 2; j <= canvas.height; j += 50) {
      ctx.moveTo(0, j);
      ctx.lineTo(canvas.width, j);
    }

    ctx.closePath();
    ctx.stroke();

    var canvas2: any = document.getElementById('canvas2');
    var ctx2: CanvasRenderingContext2D = canvas2.getContext('2d');

    // dessin du point blanc
    ctx2.fillStyle = "#fff";
    ctx2.beginPath();
    ctx2.arc(canvas.width / 2, canvas.height / 2, 20, 0, 2 * Math.PI);
    ctx2.fill();

  }



  @HostListener('unloaded')
  ngOnDestroy(): void {
    console.log('component  destroyed');

  }

  // Set Subscriptions
  setImagesDistractorSubscription() {
    this.imagesDistractorSubscription = this.practiceService.imagesDeSessionSubject.subscribe((tableau: any[]) => {
      this.imagesDistractor = tableau;
    });
    this.practiceService.emitImagesDeSessionSubject();
  }
  setImagesRetenirSubscription() {
    this.imagesRetenirSubscription = this.practiceService.imagesRetenirSubject.subscribe((tableau: any[]) => {
      this.imagesRetenir = tableau;
    });
    this.practiceService.emitImageRetenirSubject();
  }
  setImagesCompletSubscription() {
    this.imageCompletSubscription = this.practiceService.imagesCompletSubject.subscribe((complet: boolean) => {
      if (this.changingNiveau == false) {
        this.changingNiveau = true;
        this.imageComplet = complet;
        

        if (this.imageComplet) {
          var niveau = this.practiceService.monterNiveau();
          if (niveau != -1) {
            var retenir = this.practiceService.getLesNiveaux()[niveau][0];
            var distractor = this.practiceService.getLesNiveaux()[niveau][1];

            setTimeout(() => {
              this.init(retenir, distractor);
              this.changingNiveau = false;
            }, 4000);
          } else {
            setTimeout(() => {
              this.currentPage = "fin";
              this.changingNiveau = false;
              setTimeout(() => {
                this.router.navigateByUrl('sous-menu?section=memoire');
              }, 4000);
            }, 4000);
          }
        } else {
          this.changingNiveau = false;
        }
      }

    });
    this.practiceService.emitImageCompletSubject();
  }
  setSubscriptions() {
    this.setImagesDistractorSubscription();
    this.setImagesRetenirSubscription();
    this.setImagesCompletSubscription();
  }


}
