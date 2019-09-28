import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../shared/service/http-api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-sports',
  templateUrl: './view-sports.component.html',
  styleUrls: ['./view-sports.component.css']
})
export class ViewSportsComponent implements OnInit {
  viewSports: any = {};
  sportsId:any="";
  constructor(private _httpService: HttpApiService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.sportsId = this.route.snapshot.paramMap.get("id");
    this.getSports();

  }

  getSports(){
    this._httpService.get("/api/admin/getsportbyid/?Id="+this.sportsId).subscribe(result => {
      this.viewSports = result;
    }, error => {
      console.log(error); 
    });
  }

}
