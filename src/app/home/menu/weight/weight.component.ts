import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitWeight(form: NgForm) {
    const cattleID = form.value.cattleID;
    const weight = form.value.weight
    const date = form.value.dateWeight
    const body = {
      cattleID: cattleID,
      weight: weight,
      date: date
    }
    console.log(body)
    this.appService.postWeight(body)
    .subscribe(
      (response: Response) => {
        let data = response.json();
        this.router.navigate(['/cattle/'+cattleID])
        // return data
      },
      (error) => console.log(error)
    )
  }

}
