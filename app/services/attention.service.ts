import { Injectable } from "@angular/core";
import { ImageAttentionModel } from "../models/image.attention.model";

Injectable()
export class AttentionService {
  filenames : string[] = ["009-turtle.png","010-unicorn.png","019-elephant.png","024-fox.png","029-rabbit.png","032-camel.png","047-fish.png","049-butterfly.png","canard.png","cochon.png","colombe.png","crab.png","fleur.png","grue.png","heart.png","la-grenouille.png","ladybug.png","manchot.png","mouse.png","oiseau (1).png","oiseau.png","paper-ship.png","requin.png","ribbon.png","sceller.png","shuriken.png","star.png","windmill.png"];

  public images : ImageAttentionModel[] = [];
  public imagesAff : ImageAttentionModel[][] = [];

  constructor() {
    this.setImages();
    console.log(this.images.length);

  }

  init() {

  }

  setImages() {
    this.images = [];
    for (var i=0; i<108; i++) {
      var iAleatoire = Math.floor((Math.random() * this.filenames.length * 10) % this.filenames.length);
      this.images.push(new ImageAttentionModel(i, this.filenames[iAleatoire]));
    }

    this.imagesAff = [];
    for(var i=0; i<this.images.length;) {
      var tableau = [];
      for(var e=0; e<12 && i<this.images.length; e++) {
        tableau.push(this.images[i]);
        i++;
      }
      this.imagesAff.push(tableau);
    }
  }
}
