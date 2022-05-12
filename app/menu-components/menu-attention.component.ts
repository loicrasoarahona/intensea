import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-menu-attention',
  templateUrl: 'template.html',
  styleUrls: ['stylesheet.scss']
})
export class MenuAttentionComponent implements  OnInit{

  menuItems: any[] = [
    {display: 'Practice', routerLink: 'practice'},
    {display: 'Test attention 1', routerLink: 'test-1'},
    {display: 'Test attention 2', routerLink: 'test-2'},
    {display: 'Test attention 3', routerLink: 'test-3'},
    {display: 'Test attention 4', routerLink: 'test-4'}
  ];

  title = 'Attention';
  hasBackButton = true;

  constructor() { }

  ngOnInit(): void {
  }
}
