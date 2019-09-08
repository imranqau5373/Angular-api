import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpApiService } from '../../shared/service/http-api.service';

@Component({
  selector: 'app-create-court',
  templateUrl: './create-court.component.html',
  styleUrls: ['./create-court.component.css']
})
export class CreateCourtComponent implements OnInit {
  courtFrom : FormGroup;
  sportList: any = [];

  constructor( private _httpService:HttpApiService) { }

  ngOnInit() {
    this.getSportsList();
    this.courtFrom = new FormGroup({
      CourtName : new FormControl(),
      CourtStartDate : new FormControl(),
      CourtEndDate : new FormControl(),
      Court_Start_Time : new FormControl(),
      Court_End_Time : new FormControl(),
      TimeSlot : new FormControl(),
      Sport_ID_FK : new FormControl(),
      TemplateName : new FormControl(),
      
    });
  }

  submitForm() {
    let objCourt = this.courtFrom.value;
    this._httpService.post("/api/admin/AddCourt", objCourt).subscribe(result => {
      console.log(result);
      location.href = document.getElementsByTagName('base')[0].href + 'courts';
    }, error => {
      console.log(error);
    });
  }

  getSportsList(){
    this._httpService.get("/api/admin/getallsports").subscribe(result => {
      this.sportList = result;
    }, error => {
      console.log(error);
    });
  }

}
