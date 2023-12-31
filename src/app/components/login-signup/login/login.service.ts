import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  login = async (email: string, password: string) => {
    const isSuccessUser = await this.authService.login(email, password);
    if ( isSuccessUser ) {
      console.log( isSuccessUser );
      this.redirectOnSuccess();
    }
  }

  private redirectOnSuccess = async () => {
		if ( !this.authService.redirectUrl ) {
			this.router.navigateByUrl( '/' );
		} else {
			this.router.navigateByUrl( this.authService.redirectUrl );
			this.authService.redirectUrl = null;
		}
	}
}
