import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Http, HttpModule, Response } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cattle',
  templateUrl: './cattle.component.html',
  styleUrls: ['./cattle.component.css']
})
export class CattleComponent implements OnInit {

cattles = []

constructor(private http: Http) {}

  ngOnInit(): void {
    this.getCattles()
  }


    getCattles() {
      this.http.get('http://localhost:3000/cattles')
      .subscribe(
        (response: Response) => {
          let data = response.json()
          data.forEach(cattle => {
            this.cattles.push(cattle)
          })
        },
        err => {
          console.log("Error occured.")
        }
      )
    }

}
