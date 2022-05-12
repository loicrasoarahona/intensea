import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const path = "/files/";
const file = "blabla.txt";
const fileName = "data.csv";
@Component({
  selector: 'app-formulaire-utilisateur',
  templateUrl: './formulaire-utilisateur.component.html',
  styleUrls: ['./formulaire-utilisateur.component.scss'],
})
export class FormulaireUtilisateurComponent implements OnInit {
  lieu = "Ecole";
  genre = "Homme" ;
  id = "";
  dateNaissance = "--/--/--";
  constructor(
    private router : Router
  ) {
    
  }

  ngOnInit() {
    this.btGenreListener();
    this.btLieuListener();
  }
  putLieu(lieu: string){
    this.lieu = lieu; 
  }
  putGenre(genre: string) {
    this.genre = genre;
  }
  //  writeSecretFile = async () => {
  //   await Filesystem.writeFile({
  //     path: 'blabla.txt',
  //     data: "This is a test",
  //     directory: Directory.Documents,
  //     encoding: Encoding.UTF8,
  //   });
  // };
  //  readSecretFile = async () => {
  //   const contents = await Filesystem.readFile({
  //     path: 'assets/blabla.txt',
  //     directory: Directory.Documents,
  //     encoding: Encoding.UTF8,
  //   });
  //   console.log( contents);
  // }

  btGenreListener() {
    let bts = document.getElementsByClassName('bt-genre');

    
    for(var i=0; i<bts.length; i++) {
      bts[i].addEventListener('click', function() {
        for(var j=0; j<bts.length; j++) {
          bts[j]['style']['background-color']='rgba(0,0,0,0)';
        }
        
        this.style['background-color'] = 'rgb(100,100,100)';
        
      })
    }
  }

  btLieuListener() {
    let bts = document.getElementsByClassName('bt-lieu');

    
    for(var i=0; i<bts.length; i++) {
      bts[i].addEventListener('click', function() {
        for(var j=0; j<bts.length; j++) {
          bts[j]['style']['background-color']='rgba(0,0,0,0)';
        }
        this.style['background-color'] = 'rgb(100,100,100)';
      })
    }
  }

  onValider() {
    this.router.navigateByUrl('/instructions')
  }
  
}
