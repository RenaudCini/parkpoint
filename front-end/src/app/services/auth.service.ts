import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService
{
      isAuth :boolean = false;

    url: string = 'http://localhost:7555';

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor(private http: HttpClient, private router: Router) { }

    createUser(userData:string)
    {
        this.http.post(this.url + '/sing-up', userData, this.httpOptions).subscribe(res => {
            console.log(res);
        },
        err => {
            console.log(err);
        })
      }

    logUser(userData:string)
    {
      return new Promise((resolve, reject)=>{
        this.http.post(this.url + '/users/login', userData, this.httpOptions).subscribe(res => {
          this.isAuth = true;
            console.log(res,this.isAuth);
            resolve(res)
        },
        err => {
          this.isAuth = false;
            console.log(err);
        })
      })
    }

    signOut(){
      this.isAuth = false
    }


}



