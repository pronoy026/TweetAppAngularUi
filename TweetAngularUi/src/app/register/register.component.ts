import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errmessage=""
  registerData = {
    firstname : "",
    lastname : "",
    email : "",
    username : "",
    password: "",
    phone: ""
  }
  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  checkUserid() {
    console.log(this.registerData.username)
  }

  register() {
    console.log(this.registerData)
    this.auth.registerUser(this.registerData)
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
