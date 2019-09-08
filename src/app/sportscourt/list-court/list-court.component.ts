import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../shared/service/http-api.service';

@Component({
  selector: 'app-list-court',
  templateUrl: './list-court.component.html',
  styleUrls: ['./list-court.component.css']
})
export class ListCourtComponent implements OnInit {
  courtsList: any = [];
  constructor(private _httpService:HttpApiService) { }

  ngOnInit() {
  this.getCourtsList()

  }

  getCourtsList(){
    this._httpService.get("/api/court/getallcourts").subscribe(result => {
      this.courtsList = result;
    }, error => {
      console.log(error);
    });
  }

}
