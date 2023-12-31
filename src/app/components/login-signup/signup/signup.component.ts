import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  email: string = '';
  password: string ='';
  
  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
  }

  async signup() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      password: this.password,
    }
    console.log(this.email, this.password)
    await this.signupService.signup(user)
  }
}
