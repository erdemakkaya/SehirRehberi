import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[AuthService]
})
export class NavComponent implements OnInit {
loginUser:any={}
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  login(){
    this.authService.login(this.loginUser);
  }
  logOut(){
    this.authService.logOut();
  }
  get isAuthenticated(){
   return this.authService.loggedIn();
  }

}
