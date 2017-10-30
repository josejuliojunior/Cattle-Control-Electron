import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  constructor(private http: Http, private router: Router) { }

  getCattles(body: any) {
    return this.http.get('http://localhost:3000/cattles', body)
  }

  createNewCattle(body: any) {
  return this.http.post('http://localhost:3000/cattles', body)
}

  // 'https://immense-meadow-76200.herokuapp.com'

  getCattleByID(id) {
    return this.http.get(`http://localhost:3000/cattles/${id}`)
  }

  deleteCattleByID(id) {
    return this.http.delete(`http://localhost:3000/cattles/${id}`)
  }

  postWeight(body: any) {
    return this.http.post('http://localhost:3000/weights', body)
  }


  // getWeightByID(body: any) {
  //   return this.http.get('http://localhost:4200/cattle/:id', body)
  // }
}
