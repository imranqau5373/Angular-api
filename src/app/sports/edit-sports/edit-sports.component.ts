import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../shared/service/http-api.service';
import { ActivatedRoute } from "@angular/router";
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-sports',
  templateUrl: './edit-sports.component.html',
  styleUrls: ['./edit-sports.component.css']
})
export class EditSportsComponent implements OnInit {
  sportsFrom : FormGroup;
  sportsView : any= {};
  sportsId : any ="";
  
  constructor(private _httpService: HttpApiService,private route: ActivatedRoute){ 


  }

  ngOnInit() {
    this.sportsId = this.route.snapshot.paramMap.get("id");
    this.sportsFrom = new FormGroup({
      Sport_Name : new FormControl(),
      Sport_ID : new FormControl(),
      Sport_Detail : new FormControl(),
      Sport_Description : new FormControl()
    });
    this.sportsId = this.route.snapshot.paramMap.get("id");
    this.getSports();
  }

  getSports(){
    this._httpService.get("/api/admin/getsportbyid/?Id="+this.sportsId).subscribe(result => {
      console.log(result);
      this.sportsFrom.patchValue({
        Sport_Name : result.Sport_Name,
        Sport_Detail : result.Sport_Details,
        Sport_ID : this.sportsId,
        Sport_Description : result.Sport_Description
      });
      this.sportsView = result;
    }, error => {
      console.log(error); 
    });
  }

  editSports(){
    debugger;
    let Sports = this.sportsFrom.value;
    Sports.Sport_ID = this.sportsId;
    this._httpService.post("/api/admin/editSports", Sports).subscribe(result => {
      location.href = document.getElementsByTagName('base')[0].href + 'sports';
    }, error => {
      console.log(error);
    });
  }

}
