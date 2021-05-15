import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerData = {
    firstname : "",
    lastname : "",
    email : "",
    userid : "",
    password: "",
    phoneNumber: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  checkUserid() {
    console.log(this.registerData.userid)
  }

  register() {
    console.log(this.registerData)
    }

}
