import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../shared/service/http-api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-court',
  templateUrl: './view-court.component.html',
  styleUrls: ['./view-court.component.css']
})
export class ViewCourtComponent implements OnInit {

  viewCourts: any = {};
  courtsId:any="";
  constructor(private _httpService: HttpApiService,private route: ActivatedRoute) { }


  ngOnInit() {
    this.courtsId = this.route.snapshot.paramMap.get("id");
    this.getCourts();
  }

  getCourts(){
    this._httpService.get("/api/court/viewCourt/?Id="+this.courtsId).subscribe(result => {
      console.log(result);
      this.viewCourts = result;
    }, error => {
      console.log(error); 
    });
  }

}
