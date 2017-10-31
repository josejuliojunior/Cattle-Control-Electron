import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'app/app.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'
import { NgForm } from '@angular/forms';
import * as moment from 'moment'

@Component({
  selector: 'app-cattle',
  templateUrl: './cattle.component.html',
  styleUrls: ['./cattle.component.css']
})
export class CattleComponent implements OnInit {

closeResult: string;

modalReference: any;
cattles = []
today = new Date()
sex = ["male", "famale"];
breedName = ["angus", "red angus", "nelore", "guzera", "brangus", "gir"]

constructor(private http: Http
  ,private appService: AppService
  ,private modalService: NgbModal
) {}

  ngOnInit(): void {
    this.getCattles()
    console.log(this.today)
    console.log(this.cattles)
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
      console.log(id)
      this.appService.deleteCattleByID(id)
      .subscribe((response: Response) => {
        let data = response.json()
        // this.cattles = this.cattles.filter(check => {
        //   if (this.cattles.id === id) {
        //       return false;
        //   }
        // })
        //ver a funcao filter, if cattle .id mach  the id return false
      })
    }

    onSubmitCattle(form: NgForm, content){
      const breedName = form.value.breedName;
      const dob = form.value.dob;
      const sex = form.value.sex
      const origin = form.value.origin
      const body = {
        breedName: breedName,
        dob: dob,
        sex: sex,
        origin: origin
      }
      console.log(body)
      this.appService.createNewCattle(body)
      .subscribe(
        (response: Response) => {
          let data = response.json();
          this.modalReference.close()
          this.getCattles()
        },
        (error) => console.log(error)
      )
    }

    open(content) {
      this.modalReference = this.modalService.open(content)
      this.modalReference.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        console.log('by pressing ESC')
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        console.log('by clicking on a backdrop')
        return 'by clicking on a backdrop';
      } else {
        console.log(`with: ${reason}`)
        return  `with: ${reason}`;

      }
    }


}
