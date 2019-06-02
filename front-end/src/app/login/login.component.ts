import { Component, OnInit } from '@angular/core';


import {
  AuthService
} from '../services/auth.service';
import {
  Router
} from '@angular/router';
import {
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authStatus: boolean;
  userData: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }
  onSubmit(form: NgForm) {

    this.userData = {
      email: form.value["email"],
      password: form.value["password"]
    };


    this.authService.logUser(this.userData).then(()=>{
      this.authStatus = this.authService.isAuth;
    })
  }

  OnSignOut(){
    this.authService.signOut();
    this.authStatus =this.authService.isAuth;

    }


}
