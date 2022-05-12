import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PracticeService } from '../services/practice.service';

@Component({
  selector: 'app-tuile',
  templateUrl: './tuile.component.html',
  styleUrls: ['./tuile.component.scss'],
})
export class TuileComponent implements OnInit, OnDestroy {

  @Input() path: string = '';
  @Input() id: number = 0;
  @Input() image: any = null;

  @Input() borderStyle: string = '';

  imageChoisiComplet : boolean = false;

  imageChoisiCompletSubscription : Subscription = new Subscription();

  constructor(
    private practiceService: PracticeService
  ) { }

  ngOnInit() {
    this.borderStyle = '';

    this.setImageChoisiCompletSubscription();
   }

  public onClick() {
    if (!this.practiceService.imagesChoisiComplet()) {
      this.borderStyle = 'solid';
      this.practiceService.pushImageChoisi(this.image);
    }

  }

  setImageChoisiCompletSubscription() {
    this.imageChoisiCompletSubscription = this.practiceService.imagesCompletSubject.subscribe((complet : boolean) => {
      this.imageChoisiComplet = complet;
      // if(complet) {
      //   setTimeout(() => {
      //     this.borderStyle= '';
      //   }, 4000);
      // }
    });
    this.practiceService.emitImageCompletSubject();
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
    this.borderStyle='';
      console.log('tuile destroyed');
      
  }

}
