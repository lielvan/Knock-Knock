import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class Firebase_Auth {
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  login() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  isAuthenticated(): Observable<any> {
    return this.afAuth.authState;
  }
}
