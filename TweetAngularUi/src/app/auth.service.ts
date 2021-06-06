import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient, private router : Router, private config: ConfigService) { }
  
  private _registerUserUrl = this.config.apiServer+"/register"
  private _loginUserUrl = this.config.apiServer+"/login"

  registerUser(user) {
    return this.http.post<any>(this._registerUserUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUserUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')  //a boolean value to check if the token is present or not
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.router.navigate(['/login'])
  }

  getToken() {
    // console.log(localStorage.getItem('token'))
    return localStorage.getItem('token')
  }
}
