import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'otman';
  password ='1234';
  message = false;

  constructor(private router : Router ) { }

  ngOnInit(): void {
  }



  login(loginform: any){
    if ( loginform.value.username == this.username && loginform.value.password == this.password){
      this.router.navigate(['product']);

  }
  else {
    this.message = true;
  }
}}
