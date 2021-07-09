import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartask';
  constructor(private route:Router){

  }
  getSignupForm(){
    this.route.navigateByUrl("signup");
  }
  getLogin(){
    this.route.navigateByUrl("login");
  }
  getUserDetails(){
    this.route.navigateByUrl("userdetails");
  }
}
