import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Http, HttpModule, Response } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'app/app.service';


@Component({
  selector: 'app-cattle-info',
  templateUrl: './cattle-info.component.html',
  styleUrls: ['./cattle-info.component.css']
})
export class CattleInfoComponent implements OnInit {

cattleInfo = []
weightInfo = []
// weightDate = []

  constructor(private appService: AppService, private http: Http, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.getCattleByID(id)
  }


    getCattleByID(id) {
      this.appService.getCattleByID(id)
      .subscribe(
        (response: Response) => {
          let data = response.json()
            this.cattleInfo.push(data)
            data.weights.forEach(weight => {
              this.weightInfo.push(weight)
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
