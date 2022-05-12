import {AfterContentInit, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../menu-components/template.html',
  styleUrls: ['../menu-components/stylesheet.scss'],
})
export class HomePage {

  menuItems: any[] = [
    {display: 'Mémoire', routerLink: '/memoire'},
    {display: 'Attention', routerLink: '/attention'},
    {display: 'Sensoriel', routerLink: '/sensoriel'},
    {display: 'Questionnaire', routerLink: '/questionnaire'}
  ];

  title = 'InTEnSeA';

  constructor() {}

}
