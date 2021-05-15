import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinData = {
    Userid : "",
    Password : ""
  };
  errmessage = ""

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    
  }

}
