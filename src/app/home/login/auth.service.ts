import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private http: Http, private router: Router) { }

  loginUser(body: any) {
    return this.http.post('https://immense-meadow-76200.herokuapp.com/login', body)
  }

}
