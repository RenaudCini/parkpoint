import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ChatroomComponent } from './users/user/chatroom/chatroom.component';
import { MessageComponent } from './users/user/chatroom/message/message.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './services/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { PropoundComponent } from './propound/propound.component';
import { UserService } from './services/user.service'


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profil', canActivate: [AuthGuard], component: UsersComponent },
  { path: 'profil/:id', canActivate: [AuthGuard], component: UserComponent },
  { path: '', component:  LoginComponent },
  { path: 'propound', canActivate: [AuthGuard], component: PropoundComponent },
  { path: '**', redirectTo: 'not-found' }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    ChatroomComponent,
    MessageComponent,
    LoginComponent,
    SignUpComponent,
    PropoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
  ],

  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
