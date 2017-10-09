import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { Firebase_Auth } from './providers/firebase_auth';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Knock Knock';

  constructor(public loginService: Firebase_Auth, private router: Router) {}

  isAuth() {
    return this.loginService.isAuthenticated();
  }

  logout() {
    this.loginService.logout();
    setTimeout(() => this.router.navigate(['login']),5);
  }
}
