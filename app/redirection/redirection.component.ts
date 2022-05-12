import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.scss'],
})
export class RedirectionComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    var redirect: string = this.route.snapshot.queryParamMap.get('redirect');

    if (redirect != null) {
      setTimeout(() => {
        console.log('redirecting to : ' + redirect + ' ' + this.route.snapshot.queryParams);

        this.router.navigate([redirect], { queryParams: this.route.snapshot.queryParams });
      }, 4000);
      // console.log(this.route.snapshot.queryParams);
    }
  }

}
