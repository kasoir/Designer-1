import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { JWTPayload, defaultJWTPayload } from 'models/jwtpayload.model';
import { jwtTokenConfig } from 'settings/settings';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { Router } from '@angular/router';

interface TokenResponse {
    data: {
        token: string;
    }
}
@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private apiUrl = 'http://localhost:3000';
    public currentUserData: BehaviorSubject<JWTPayload> = new BehaviorSubject(defaultJWTPayload);
    public user: JWTPayload = defaultJWTPayload;
    public isActive = new BehaviorSubject(false);
    public isUserExist = false;
    public isAttacked = false;
    redirectUrl: string | null = null;

    constructor(
        private http: HttpClient,
        private router: Router,
    ) { }

    login = async (email: string, password: string) => {
        try {
            if (!email || !password) return null;
            const hashedPassword = CryptoJS.HmacSHA256(password, email).toString();
            const body = { email: email, password: hashedPassword };
            const tokenResponse = await this.http.post<TokenResponse>(`${this.apiUrl}/login`, body).toPromise();
            const decodedToken = decodeToken(tokenResponse.data.token || '');
            localStorage.setItem(jwtTokenConfig.storagePathUI, JSON.stringify(decodedToken));
            window.removeEventListener('storage', () => { });
            window.addEventListener('storage', () => {
                this.isAttacked = true;
                this.router.navigate(['auth/login']);
                return EMPTY;
            });
            this.currentUserData.next(decodedToken);
            this.isActive.next(true);
            this.user = decodedToken;
            this.isUserExist = true;
            if (!!this.redirectUrl) {
                const url = this.redirectUrl;
                this.redirectUrl = null;
                this.router.navigate([url]);
            }

            return decodedToken;
        } catch (error) {
            this.logoutUser();
            throw error;
        }
    }

    signup = async (user: {
        firstName: string,
        lastName: string,
        phone: string,
        email: string,
        password: string,
    }) => {

        const hashedPassword = CryptoJS.HmacSHA256(user.password, user.email).toString();
        user.password = hashedPassword;
        const jwt = await this.http.post(`${this.apiUrl}/signup`, user).toPromise();
        console.log(jwt)
        return jwt;
    }

    public logoutUser = async () => {
        try {
            this.currentUserData.next(defaultJWTPayload);
            this.isActive.next(false);
            this.user = defaultJWTPayload;
            localStorage.removeItem(jwtTokenConfig.storagePathUI);
            this.router.navigate(['auth/login'])
            this.isUserExist = false;
        } catch (error) {
            console.error(error);
        }
    }

    public verifyUserToken = async () => {
        try {
            const locallyStoredUser = localStorage.getItem(jwtTokenConfig.storagePathUI);
            if (locallyStoredUser) {
                const userData = JSON.parse(locallyStoredUser);
                if (userData) {
                    this.router.navigate(['/']);
                    this.currentUserData.next(userData);
                    this.isActive.next(true);
                    this.user = userData;
                    this.isUserExist = true;
                    return true;
                } else {
                    this.isUserExist = false;
                    this.router.navigate(['auth/login'])
                    return false;
                }
            } else {
                this.isUserExist = false;
                this.currentUserData.next(defaultJWTPayload);
                this.isActive.next(false);
                this.user = defaultJWTPayload;
                this.router.navigate(['auth/login'])
                return false;
            }
        } catch (error) {
            this.isUserExist = false;
            localStorage.removeItem(jwtTokenConfig.storagePathUI);
            console.error(error);
            this.logoutUser();
            return false;
        }

    }

}

function decodeToken(token: string): JWTPayload & TokenResponse {
    const decodedToken = <JWTPayload>jwtDecode(token);
    return {
        ...decodedToken,
        data: {
            token
        },
    }
}