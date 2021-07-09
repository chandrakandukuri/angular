import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  getUserFieldChanges(name:string,event:any){
    // if(name == "password"){
    //   if(!event.currentTarget.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
    //     this.data[name]='';
    //     event.currentTarget.value = '';
    //     return;
    //   }
    // }
    
    this.data[name]=event.currentTarget.value;
  }
  data:any = {username:"",name:"",email:"",password:"",confirmPassword:"",mobileNo:"",address:""};
  registerUser(){
    var list = Object.keys(this.data).filter(obj => !this.data[obj]);
    if(list.length>0)
    alert(list.join(",") +" These values should be required");
    else{
     var users:any = localStorage.getItem("users");
      users = users ? JSON.parse(users):[];
      users.push(this.data);
      localStorage.setItem("users",JSON.stringify(users));
      this.route.navigateByUrl("login");
    }
  }
}
