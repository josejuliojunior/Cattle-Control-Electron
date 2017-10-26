import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private http: Http, private router: Router) { }

  loginUser(body: any) {
    return this.http.post('http://localhost:3000/login', body)
  }

}


//https://immense-meadow-76200.herokuapp.com/login
