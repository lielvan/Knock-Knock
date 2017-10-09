import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Firebase_Auth } from '../providers/firebase_auth';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: any;
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public loginservice: Firebase_Auth, private router: Router) {
    this.user = this.afAuth.authState;
  }

// Login with Google account then redirct to doormessage
  login() {
    event.preventDefault();
    this.loginservice.login()
    .then(
      (success) => {
      this.router.navigate(['/doormessage']);
    }).catch(
      (err) => {
        this.error = err;
      });
  }
}
