import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private authService: AuthService) { }

  signup = async (user: {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    password: string,
  }) => {
    await this.authService.signup(user)
  }

}
