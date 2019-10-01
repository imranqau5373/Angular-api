import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../shared/service/http-api.service';
import { ActivatedRoute } from "@angular/router";
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-court',
  templateUrl: './edit-court.component.html',
  styleUrls: ['./edit-court.component.css']
})
export class EditCourtComponent implements OnInit {
  courtFrom : FormGroup;
  courtView : any= {};
  courtId : any ="";
  sportList: any = [];
  constructor(private _httpService: HttpApiService,private route: ActivatedRoute){ 


  }

  ngOnInit() {
    this.courtId = this.route.snapshot.paramMap.get("id");
    this.getSportsList();
    this.courtFrom = new FormGroup({
      CourtName : new FormControl(),
      Sport_ID_FK : new FormControl(),
      TemplateName : new FormControl(),
      Court_ID : new FormControl(),
      Court_Description : new FormControl(), 
      // CourtStartDate : new FormControl(),
      // CourtEndDate : new FormControl(),
      // Court_Start_Time : new FormControl(),
      // Court_End_Time : new FormControl(),
      // TimeSlot : new FormControl(),


    });
    this.courtId = this.route.snapshot.paramMap.get("id");
    this.getCourt();
  }

  getSportsList(){
    this._httpService.get("/api/admin/getallsports").subscribe(result => {
      this.sportList = result;
    }, error => {
      console.log(error);
    });
  }

  getCourt(){
    this._httpService.get("/api/court/viewCourt/?Id="+this.courtId).subscribe(result => {
      console.log(result);
      this.courtFrom.patchValue({
        CourtName : result.Court_Name,
        Sport_ID_FK : result.Sport_ID_FK,
        TemplateName : result.TemplateName,
        Court_Description : result.CourtDescription,
        Court_ID : this.courtId
      });
      this.courtView = result;
    }, error => {
      console.log(error); 
    });
  }

  updateCourt(){
    let objCourt = this.courtFrom.value;
    console.log(objCourt);
    this._httpService.post("/api/court/UpdateCourt", objCourt).subscribe(result => {
debugger;
      location.href = document.getElementsByTagName('base')[0].href + 'courts';
    }, error => {
      console.log(error);
    });
  }

}
