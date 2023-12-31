import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AuthService) { }

  login = async (email: string, password: string) => {
    await this.authService.login(email, password)
  }
}
