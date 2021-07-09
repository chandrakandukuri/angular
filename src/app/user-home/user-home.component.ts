import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
list =[];
  constructor() { }

  ngOnInit(): void {
    var users:any = localStorage.getItem("users");
    this.list = users ? JSON.parse(users):[];

  }
  getKeys(el:any){
     return el?Object.keys(el):[];
  }
}
