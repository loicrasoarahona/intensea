import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export enum KEY_CODE {
  SPACE = 32
}

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent implements OnInit {

  listePage : string[] = ['page1', 'page2'];

  page: number = 0;

  constructor(private router : Router) { }

  ngOnInit() {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.keyCode === KEY_CODE.SPACE) {
      this.onPageSuivant();
    }
  }

  onPageSuivant() {
    if(this.page < this.listePage.length-1) {
      this.page ++;
    } else {
      this.router.navigateByUrl('/diapo-exemple');
    }
  }

}
 