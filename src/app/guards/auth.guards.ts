import { RouterStateSnapshot, Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private _router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isLoggedin = localStorage.getItem('isLoggedIn');
        if (isLoggedin === 'true') {
            return true;
        }
        this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}