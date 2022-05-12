import { Component, enableProdMode } from '@angular/core';
import {IMenuComponent} from './menu-components/menu.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  title = 'The title';
  hasBackButton = false;
  darkmode = false;

  constructor() {
    // enableProdMode();
  }

  logTitle(component: IMenuComponent) {
    this.title = component.title;
    this.hasBackButton = component.hasBackButton;
    this.darkmode = component.darkmode;
  }
}
