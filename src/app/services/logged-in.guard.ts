import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private as: AuthorizationService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        let isLoggedIn = this.as.isLoggedIn();
        console.log("canActivate", isLoggedIn);
        return isLoggedIn;
    }
}