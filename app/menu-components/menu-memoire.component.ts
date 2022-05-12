import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-menu-memoire',
  templateUrl: 'template.html',
  styleUrls: ['stylesheet.scss']
})
export class MenuMemoireComponent implements  OnInit{

  menuItems: any[] = [
    {display: 'Practice', routerLink: '/practice'},
    {display: 'Test mémoire 1', routerLink: 'test-1'},
    {display: 'Test mémoire 2', routerLink: 'test-2'},
    {display: 'Test mémoire 3', routerLink: 'test-3'},
    {display: 'Test mémoire 4', routerLink: 'test-4'}
  ];

  title = 'Mémoire';
  hasBackButton = true;

  constructor() { }

  ngOnInit(): void {
  }
}
