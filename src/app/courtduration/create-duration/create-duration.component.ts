import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpApiService } from '../../shared/service/http-api.service';

@Component({
  selector: 'app-create-duration',
  templateUrl: './create-duration.component.html',
  styleUrls: ['./create-duration.component.css']
})
export class CreateDurationComponent implements OnInit {
  courtDurationForm : FormGroup;

  constructor( private _httpService:HttpApiService) { }

  ngOnInit() {
    this.courtDurationForm = new FormGroup({
      FK_CourtId : new FormControl(),
      StartDate : new FormControl(),
      EndDate : new FormControl(),
      Duration_Details : new FormControl(),
      SportsId : new FormControl()
    });
  }

  submitForm() {
    let objCourt = this.courtDurationForm.value;
    this._httpService.post("/api/courtduration/addcourtduration", objCourt).subscribe(result => {
      console.log(result);
      location.href = document.getElementsByTagName('base')[0].href + 'sports';
    }, error => {
      console.log(error);
    });
  }

}
