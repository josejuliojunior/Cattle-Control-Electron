import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'app/app.service';

import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

@ViewChild('closeBtn') closeBtn: ElementRef;

  closeResult: string;

  cattleInfo = []
  weightInfo = []

  constructor(
    private modalService: NgbModal,
    private appService: AppService, private http: Http, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = 1
    // this.route.snapshot.params['id'];
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


        private closeModal(): void {
            this.closeBtn.nativeElement.click();
        }


}
