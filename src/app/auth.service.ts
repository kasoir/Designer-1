import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://your-api-url';

  constructor(private http: HttpClient) { }

  login = async (email: string, password: string)=> {

    const hashedPassword = CryptoJS.HmacSHA256(password, email).toString();

    const body = { email: email, password: hashedPassword };
    // return this.http.post(`${this.apiUrl}/login`, body);
  }
}
