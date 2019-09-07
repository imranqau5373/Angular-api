import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpApiService } from '../../shared/service/http-api.service';


@Component({
  selector: 'app-create-sports',
  templateUrl: './create-sports.component.html',
  styleUrls: ['./create-sports.component.css']
})
export class CreateSportsComponent implements OnInit {
sportsFrom : FormGroup;


  constructor( private _httpService:HttpApiService) { }

  ngOnInit() {
    this.sportsFrom = new FormGroup({
      Sport_Name : new FormControl(),
      Sport_Detail : new FormControl(),
      Sport_Description : new FormControl()
    });
  }

  submitForm() {
    debugger;
    console.log(this.sportsFrom.value);
    let Sport = this.sportsFrom.value;
    this._httpService.post("/api/admin/AddSport", Sport).subscribe(result => {
      console.log(result);
      location.href = document.getElementsByTagName('base')[0].href + 'sports';
    }, error => {
      console.log(error);
    });
  }

}
