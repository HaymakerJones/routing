import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

    constructor() { }

    login(user: string, password: string): boolean {
        if (user === 'user' && password === 'password') {
            localStorage.setItem('userName', user);
            return true;
        }
        else { return false; }
    }

    logout(): any {
        localStorage.removeItem('userName');
    }

    getUser(): string {
        return localStorage.getItem('userName');
    }

    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }
}

export const AUTHORIZATION_PROVIDER: Array<any> = [
    { provide: AuthorizationService, useClass: AuthorizationService },
];