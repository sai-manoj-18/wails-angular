import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  username = new FormControl('', [Validators.required])
  password = new FormControl('', [Validators.required])
  credentialValidation = []
  credentialError : boolean = false;

  constructor(public loginService:LoginService, public route: Router){}

  ngOnInit(){
    this.loginService.getCredentials().subscribe((data) => {
      console.log("Data is",data);
      this.credentialValidation = data.users
      console.log("the final list is",this.credentialValidation);
    })
  }

  ValidateLogin(){
    this.credentialValidation.map((record) => {
      let { username,password } = record
      if(this.username.value == username){
        if(this.password.value == password){
          console.log("login is working");
          this.route.navigate(['home']);
        }
      }
    })
    this.credentialError = true;
  }

}
