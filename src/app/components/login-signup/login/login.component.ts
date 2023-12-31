import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: string ='';
  email: string = '';

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    ) { }

  async ngOnInit() {
    if ( await this.authService.verifyUserToken() ) {
			this.router.navigateByUrl( '/' );
		}
    if ( this.authService.isAttacked ) {
			this.authService.logoutUser();
		}
		this.authService.isAttacked = false;
  }

  async login() {
    await this.loginService.login(this.email, this.password)
  }
}
