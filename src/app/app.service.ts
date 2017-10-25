import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  constructor(private http: Http, private router: Router) { }

  getCattles(body: any) {
    return this.http.get('https://immense-meadow-76200.herokuapp.com/cattles', body)
  }

  getCattlesByID(body: any) {
    return this.http.get('http://localhost:4200/cattle/:id', body)
  }

  // getWeightByID(body: any) {
  //   return this.http.get('http://localhost:4200/cattle/:id', body)
  // }
}
