import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sous-menu',
  templateUrl: './sous-menu.component.html',
  styleUrls: ['./sous-menu.component.scss'],
})
export class SousMenuComponent implements OnInit {

  //data 
  data = {
    memoire: {
      items: [
        {
          label: "PRACTICE",
          url: "/ecran-chargement?sortie=practice",
        },
        {
          label: "TEST MEMOIRE 1",
          url: "",
        },
        {
          label: "TEST MEMOIRE 2",
          url: "",
        },
        {
          label: "TEST MEMOIRE 3",
          url: "",
        },
        {
          label: "TEST MEMOIRE 4",
          url: "",
        }],
      color: 'rgb(197,224,180)'
    },

    attention: {
      items: [
        {
          label: "PRACTICE",
          url: "/ecran-chargement?sortie=diapo-exemple",
        },
        {
          label: "TEST ATTENTION 1",
          url: "",
        },
        {
          label: "TEST ATTENTION 2",
          url: "",
        },
        {
          label: "TEST ATTENTION 3",
          url: "",
        },
        {
          label: "TEST ATTENTION 4",
          url: "",
        }],
      color: 'rgb(169, 209, 142)'
    }
  };
  //

  items: any[] = [];
  color: string;
  hasBackButton = true;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    var section = this.route.snapshot.queryParamMap.get('section');
    var attr = this.data[section];

    this.items = attr.items;
    this.color = attr.color;
  }

}
