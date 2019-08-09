import { Injectable } from "@angular/core";
import { LoginUser } from "../models/loginUser";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { JwtHelper, tokenNotExpired } from "angular2-jwt";
import { Router } from "@angular/router";
import { AlertifyService } from "./alertify.service";
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  path: string = "https://localhost:44327/api/auth/";
  userToken: any;
  decodeToken: any;
  jwtHelper: JwtHelper;
  TOKEN_KEY:"token";
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}

  login(loginuser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient
      .post(this.path + "login", loginuser, { headers: headers })
      .subscribe(data => {
        this.saveToken(data);
        this.userToken = data;
        console.log(JSON.stringify(data));
       // this.decodeToken = this.jwtHelper.decodeToken(data[0]);
        this.alertifyService.success("Sisteme Giriş yapıldı");
        this.router.navigateByUrl("/city");
      });
  }
  register(registerUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient.post(this.path + "register", registerUser, {
      headers: headers
    }).subscribe(data=>{

    })
  }


  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
loggedIn(){
  return tokenNotExpired(this.TOKEN_KEY)
}
get token(){
 return localStorage.getItem(this.TOKEN_KEY)
}
getCurrentUserId(){
  this.jwtHelper.decodeToken(this.token).name
}
  
}
