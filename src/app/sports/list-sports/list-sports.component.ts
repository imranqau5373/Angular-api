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
    //sorting
    key: string = 'Sport_Name'; //set default
    reverse: boolean = false;
    sort(key){
      this.key = key;
      this.reverse = !this.reverse;
    }
    p: number = 1;
  ngOnInit() {
    this.getSportsList();
  }

  getSportsList(){
    this._httpService.get("/api/admin/getallsports").subscribe(result => {
      this.sportList = result;
    }, error => {
      console.log(error); 
    });
  }

}
