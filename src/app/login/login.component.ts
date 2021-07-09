import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  error = "";

  Login(userName:any,password:any){
    var users:any = localStorage.getItem("users");
    users = users ? JSON.parse(users):[];
    var list = users.filter((obj:any )=> (obj.username == userName || obj.email == userName || obj.phoneNo == userName)&& obj.password ==password
      )
      if(list.length >0){
        this.route.navigateByUrl("userdetails");
      }else{
        this.error = "Please enter user name or password";
      }
  }
  
  
    
  
}
