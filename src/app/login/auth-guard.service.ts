import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {

    return this.canLoad();

  }



  canLoad() {

    if (!this.authService.isLoggedIn()) {

      this.router.navigate(['/login']);

    }

    return this.authService.isLoggedIn();

  }

}