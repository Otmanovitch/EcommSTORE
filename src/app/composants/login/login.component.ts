import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'otman';
  password ='1234';
  message = false;
  IsAuth= false;

  constructor(private router : Router, private ps : ProduitsService) { }

  ngOnInit(): void {
  }



  login(loginform: any){
    if ( loginform.value.username == this.username && loginform.value.password == this.password){
      this.router.navigate(['product']);
      this.ps.isAuthenticated= true;

  }
  else {
    this.message = true;
    
  }
}}
