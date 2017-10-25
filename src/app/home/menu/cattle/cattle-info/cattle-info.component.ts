import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Http, HttpModule, Response } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cattle-info',
  templateUrl: './cattle-info.component.html',
  styleUrls: ['./cattle-info.component.css']
})
export class CattleInfoComponent implements OnInit {

cattleInfo = []
weightInfo = []

  constructor(private http: Http, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.getCattleByID(id)
    // this.getWeightByID(id)
  }


    getCattleByID(id) {
      this.http.get('http://localhost:3000/cattles/'+ id)
      .subscribe(
        (response: Response) => {
          let data = response.json()
          data.forEach(cattle => {
            console.log(cattle)
            this.cattleInfo.push(cattle)
            this.weightInfo.push(cattle.weight)
          })
        },
        err => {
          console.log("Error occured.")
        }
      )
    }


    // getWeightByID(id) {
    //   this.http.get('http://localhost:3000/cattles/'+ id)
    //   .subscribe(
    //     (response: Response) => {
    //       let data = response.json()
    //       data.forEach(weight => {
    //         console.log(weight)
    //         this.weightInfo.push(weight)
    //       })
    //     },
    //     err => {
    //       console.log("Error occured.")
    //     }
    //   )
    // }
}
