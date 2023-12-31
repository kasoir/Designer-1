import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: string ='';
  email: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  async login() {
    console.log(this.email, this.password)
    await this.loginService.login(this.email, this.password)
  }
}
