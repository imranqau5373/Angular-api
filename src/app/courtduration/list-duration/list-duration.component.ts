import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../shared/service/http-api.service';


@Component({
  selector: 'app-list-duration',
  templateUrl: './list-duration.component.html',
  styleUrls: ['./list-duration.component.css']
})
export class ListDurationComponent implements OnInit {
  durationList: any = [];
  constructor(private _httpService:HttpApiService) { }

  ngOnInit() {
this.getDurationList();
  }

  getDurationList(){
    this._httpService.get("/api/courtduration/getallcourtsduration").subscribe(result => {
      this.durationList = result;
    }, error => {
      console.log(error);
    });
  }

}
