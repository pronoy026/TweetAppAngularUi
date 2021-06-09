import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor( private injector: Injector, private auth: AuthService) { }

  intercept( req, next) {
    let token = this.auth.getToken()
    if(token==null) {
      token = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb24iLCJleHAiOjE2MjM4MTU1MjcsImlhdCI6MTYyMjk5ODEyMX0.fgqWQdo0S1OKNmwtEqDETXD3dEHS_gpIf0Cc9gO8ArQ`
    }
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization : `Bearer ${token}`
        // Authorization : 'Bearer xx.xx.xx'
      }
    })
    console.log('intercepted : token added to http header')
    return next.handle(tokenizedReq)
  }
}
