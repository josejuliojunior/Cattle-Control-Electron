import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {


  data = [
    {"cattleID": 1, "breedName": "angus", "dob": "2014-09-14", "age": 19 ,"sex": "male", "origin": "Alexandre", "firstWeight": "214 kg", "dateFWeight": "2015-04-28", "lastWeight": "410 kg", "dataLWeight": "2016-01-07", "lastGain": Math.round(((507-410)/90) * 1000) / 1000  + " kg/day", "acutalWeight": "507 kg", "dataAWeight": "2016-04-06","totalGain": Math.round(((507-214)/344) * 1000) / 1000 + " kg/day"},
    {"cattleID": 2, "breedName": "red angus", "dob": "2014-11-13","age": 19 ,"sex": "male", "origin": "Diva", "firstWeight": "167 kg", "dateFWeight": "2015-05-04", "lastWeight": "439 kg", "dataLWeight": "2016-03-09", "lastGain": Math.round(((492-439)/90) * 1000) / 1000  + " kg/day", "acutalWeight": "492 kg", "dataAWeight": "2016-06-07","totalGain": Math.round(((492-167)/400) * 1000) / 1000 + " kg/day"},
    {"cattleID": 3, "breedName": "nelore", "dob": "2014-05-27","age": 22 ,"sex": "male", "origin": "Cebola", "firstWeight": "301 kg", "dateFWeight": "2015-05-04", "lastWeight": "455 kg", "dataLWeight": "2016-01-02", "lastGain": Math.round(((556-455)/90) * 1000) / 1000  + " kg/day", "acutalWeight": "556 kg", "dataAWeight": "2016-04-01","totalGain": Math.round(((556-301)/333) * 1000) / 1000 + " kg/day"},
    {"cattleID": 4, "breedName": "angus", "dob": "2014-09-04","age": 21 ,"sex": "male", "origin": "Cebola", "firstWeight": "222 kg", "dateFWeight": "2015-04-28", "lastWeight": "420 kg", "dataLWeight": "2016-02-22", "lastGain": Math.round(((519-420)/90) * 1000) / 1000  + " kg/day", "acutalWeight": "519 kg", "dataAWeight": "2016-05-22","totalGain": Math.round(((519-222)/390) * 1000) / 1000 + " kg/day"},
    {"cattleID": 5, "breedName": "red angus", "dob": "2015-02-21","age": 27 ,"sex": "male", "origin": "Diva", "firstWeight": "243 kg", "dateFWeight": "2015-11-12", "lastWeight": "549 kg", "dataLWeight": "2017-02-02", "lastGain": Math.round(((634-549)/90) * 1000) / 1000  + " kg/day", "acutalWeight": "634 kg", "dataAWeight": "2017-05-03","totalGain": Math.round(((634-243)/538) * 1000) / 1000 + " kg/day"},
    {"cattleID": 6, "breedName": "nelore", "dob": "2015-05-24","age": 25 ,"sex": "male", "origin": "Alexandre", "firstWeight": "167 kg", "dateFWeight": "2015-11-12", "lastWeight": "529 kg", "dataLWeight": "2017-03-01", "lastGain": Math.round(((574-529)/90) * 1000) / 1000  + " kg/day", "acutalWeight": "574 kg", "dataAWeight": "2017-05-30","totalGain": Math.round(((574-167)/565) * 1000) / 1000 + " kg/day"},
    {"cattleID": 7, "breedName": "guzera", "dob": "2015-03-22","age": 27 ,"sex": "male", "origin": "Rodrigo", "firstWeight": "221 kg", "dateFWeight": "2015-11-12", "lastWeight": "530 kg", "dataLWeight": "2017-03-04", "lastGain": Math.round(((564-530)/90) * 1000) / 1000  + " kg/day", "acutalWeight": "564 kg", "dataAWeight": "2017-06-02","totalGain": Math.round(((564-221)/568) * 1000) / 1000 + " kg/day"},
    {"cattleID": 8, "breedName": "brangus", "dob": "2012-12-01","age": 37 ,"sex": "male", "origin": "Rodrigo", "firstWeight": "209 kg", "dateFWeight": "2013-12-20", "lastWeight": "462 kg", "dataLWeight": "2015-09-02", "lastGain": Math.round(((522-462)/90) * 1000) / 1000  + " kg/day", "acutalWeight": "522 kg", "dataAWeight": "2015-12-01","totalGain": Math.round(((522-209)/711) * 1000) / 1000 + " kg/day"},
    {"cattleID": 9, "breedName": "gir", "dob": "2014-08-02","age": 23 ,"sex": "male", "origin": "Fernando", "firstWeight": "251 kg", "dateFWeight": "2015-05-04", "lastWeight": "439 kg", "dataLWeight": "2016-04-05", "lastGain": Math.round(((477-439)/90) * 1000) / 1000  + " kg/day", "acutalWeight": "477 kg", "dataAWeight": "2016-07-04","totalGain": Math.round(((477-251)/427) * 1000) / 1000 + " kg/day"},
    {"cattleID": 10, "breedName": "gir", "dob": "2014-05-08","age": 37 ,"sex": "male", "origin": "Fernando","firstWeight": "215 kg", "dateFWeight": "2015-06-02", "lastWeight": "538 kg", "dataLWeight": "2017-02-24", "lastGain": Math.round(((630-538)/90) * 1000) / 1000  + " kg/day", "acutalWeight": "630 kg", "dataAWeight": "2017-05-25","totalGain": Math.round(((630-215)/723) * 1000) / 1000 + " kg/day"}
]

  cattles = []
  weightInfo = []

  constructor(private appService: AppService
              ,private http: Http
            ) { }

  ngOnInit(): void {
    // this.getCattles()
  }

  settings = {
  columns: {
    cattleID: {
      title: 'ID'
    },
    breedName: {
      title: 'Breed',
      filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              { value: 'angus', title: 'angus' },
              { value: 'red angus', title: 'red angus' },
              { value: 'nelore', title: 'nelore' },
              { value: 'guzera', title: 'guzera' },
              { value: 'brangus', title: 'brangus' },
              { value: 'gir', title: 'gir' },
            ],
          },
        },
    },
    age: {
      title: 'Age'
    },
    firstWeight: {
      title: 'Fist Weight'
    },
    dateFWeight: {
      title: 'First Weight Date'
    },
    lastWeight: {
      title: 'Last Weight'
    },
    dataLWeight: {
      title: 'Last Weight Date'
    },
    lastGain: {
      title: 'Last Gain'
    },
    acutalWeight: {
      title: 'Acutal Weight'
    },
    dataAWeight: {
      title: 'Acutal Weight Date'
    },
    totalGain: {
      title: 'Total Gain'
    }
  }
};

// getCattles() {
//   this.http.get('http://localhost:3000/cattles')
//   .subscribe(
//     (response: Response) => {
//       // let data = response.json()
//       // data.forEach(cattle => {
//       //   this.data.push(cattle)
//       // })
//       this.data = response.json()
//       console.log(this.data)
//     },
//     err => {
//       console.log("Error occured.")
//     }
//   )
// }

}
