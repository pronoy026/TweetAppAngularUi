import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinData = {
    username : "",
    password : ""
  };
  errmessage = ""

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.signinData)
    this.auth.loginUser(this.signinData)
        .subscribe(
          res => {
            console.log(res)
            localStorage.setItem('token', res.token)
            localStorage.setItem('username', res.username)
            this.router.navigate(['/tweets/dashboard'])
          },
          err => {
            this.errmessage = err.error
          }
        )
  }

}
