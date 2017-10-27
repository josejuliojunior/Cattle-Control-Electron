import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from 'app/app.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule, Response } from '@angular/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms'
import { ModalComponent } from 'app/modal/modal.component';
import { CattleInfoComponent } from 'app/home/menu/cattle/cattle-info/cattle-info.component';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  closeResult: string;

  cattleInfo = []
  weightInfo = []

  today = new Date()

  constructor(private appService: AppService, private router: Router, private modalService: NgbModal,
   private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getCattleByID(id) {
    this.appService.getCattleByID(id)
    .subscribe(
      (response: Response) => {
        let data = response.json()
          this.cattleInfo = [ ]
          this.weightInfo =[ ]
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
        this.getCattleByID(cattleID)
      },
      (error) => console.log(error)
    )
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
