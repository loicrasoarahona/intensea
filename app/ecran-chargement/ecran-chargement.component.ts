import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ecran-chargement',
  templateUrl: './ecran-chargement.component.html',
  styleUrls: ['./ecran-chargement.component.scss'],
})
export class EcranChargementComponent implements OnInit, OnDestroy {

  sortie : string = "";


  constructor(private route : ActivatedRoute,
              private router : Router,
              private elementRef : ElementRef
              ) { }

  ngOnInit() {
    this.sortie = this.route.snapshot.queryParamMap.get('sortie');

    setTimeout(() => {
      this.naviguer();
      this.elementRef.nativeElement.remove();
    }, 3000);
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
      console.log('ecran destroyed');
      this.elementRef.nativeElement.remove();
  }

  naviguer() {
    this.router.navigateByUrl(this.sortie);
    this.sortie='practice';
  }

}
