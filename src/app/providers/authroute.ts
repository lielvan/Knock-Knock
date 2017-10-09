import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { Firebase_Auth } from './firebase_auth';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthRoute implements CanActivate {
  constructor(protected authservice: Firebase_Auth, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authservice.afAuth.authState.map((auth) => {
      if (auth) {
        this.router.navigate(['/doormessage']);
        return false;
      }
      return true;
    }).take(1);
  }
}
