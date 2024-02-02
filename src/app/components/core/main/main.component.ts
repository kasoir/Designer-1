import { trigger, transition, query, style, animateChild, group, animate } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
		trigger( 'routerTransition', [
			transition( '* <=> *', [
				query( ':enter, :leave', style( { position: 'absolute', width: '100%', top: '0', left: '0' } ), { optional: true } ),
				query( ':enter', style( { opacity: 0 } ), { optional: true } ),
				query( ':leave', animateChild(), { optional: true } ),
				group( [
					query( ':leave', [ animate( '.5s ease-out', style( { opacity: 0 } ) ) ], { optional: true } ),
					query( ':enter', [ animate( '.5s ease-out', style( { opacity: 1 } ) ) ], { optional: true } )
				] ),
				query( ':enter', animateChild(), { optional: true } )
			] ),
		] ) ]
})
export class MainComponent implements OnInit {

  @ViewChild('container', { static: true }) htmlContainer!: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  async ngOnInit() {
    if ( !(await this.authService.verifyUserToken()) ) {
			this.router.navigateByUrl( '/auth/login' );
		}
    if ( this.authService.isAttacked ) {
			this.authService.logoutUser();
		}
		this.authService.isAttacked = true;
  }

  getAnimationState ( outlet: RouterOutlet ) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animateState;
	}

}
