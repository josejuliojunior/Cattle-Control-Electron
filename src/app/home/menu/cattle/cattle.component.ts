import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Http, HttpModule, Response } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'app/app.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cattle',
  templateUrl: './cattle.component.html',
  styleUrls: ['./cattle.component.css']
})
export class CattleComponent implements OnInit {

closeResult: string;

cattles = []
today = Date.now();


constructor(private http: Http
  ,private appService: AppService
  ,private modalService: NgbModal
) {}

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


    deleteCattleByID(id) {
      this.appService.deleteCattleByID(id)
      .subscribe((response: Response) => {
        return response
      })
    }

    onSubmitCattle(form: NgForm){
      const cattleID = form.value.cattleID;
      const breedName = form.value.breedName;
      const dob = form.value.dob;
      const sex = form.value.sex
      const origin = form.value.origin
      const body = {
        cattleID: cattleID,
        breedName: breedName,
        dob: dob,
        sex: sex,
        origin
      }
      console.log(body)
      this.appService.createNewCattle(body)
      .subscribe(
        (response: Response) => {
          let data = response.json();
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
