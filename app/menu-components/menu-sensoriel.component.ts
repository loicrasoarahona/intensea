import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-menu-sensoriel',
  templateUrl: 'template.html',
  styleUrls: ['stylesheet.scss']
})
export class MenuSensorielComponent implements  OnInit{

  menuItems: any[] = [
    {display: 'Vision', routerLink: 'vision'},
    {display: 'Audition', routerLink: 'audition'},
    {display: 'Audio-visuel', routerLink: 'audio-visuel'}
  ];

  title = 'Sensoriel';
  hasBackButton = true;

  constructor() { }

  ngOnInit(): void {
  }
}
