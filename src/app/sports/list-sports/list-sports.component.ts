import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../shared/service/http-api.service';


@Component({
  selector: 'app-list-sports',
  templateUrl: './list-sports.component.html',
  styleUrls: ['./list-sports.component.css']
})
export class ListSportsComponent implements OnInit {
  sportList: any = [];
  constructor(private _httpService: HttpApiService) { }

  ngOnInit() {
    this.getSportsList();
  }

  getSportsList(){
    debugger;
    this._httpService.get("/api/admin/getallsports").subscribe(result => {
      this.sportList = result;
    }, error => {
      debugger;
      console.log(error);
    });
  }

}
