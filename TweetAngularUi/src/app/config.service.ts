import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiServer = "http://localhost:8080/api/v1.0/tweets"

  constructor() { }
}
