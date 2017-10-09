import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './providers/authguard';
import { AuthRoute } from './providers/authroute';
import { Firebase_Auth } from './providers/firebase_auth';

import { ChatlogComponent } from './chatlog/chatlog.component';
import { DoormessageComponent } from './doormessage/doormessage.component';
import { LoginComponent } from './login/login.component';
import { VideoCamComponent } from './video-cam/video-cam.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'chatlog', component: ChatlogComponent, canActivate: [AuthGuard]},
  { path: 'doormessage', component: DoormessageComponent, canActivate: [AuthGuard] },
  { path: 'video-cam', component: VideoCamComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthRoute] },
]

@NgModule({
  declarations: [
    AppComponent,
    ChatlogComponent,
    DoormessageComponent,
    LoginComponent,
    VideoCamComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [Firebase_Auth, AuthGuard, AuthRoute],
  bootstrap: [AppComponent]
})
export class AppModule { }
