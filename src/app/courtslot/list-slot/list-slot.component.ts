import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../../shared/service/http-api.service';

@Component({
  selector: 'app-list-slot',
  templateUrl: './list-slot.component.html',
  styleUrls: ['./list-slot.component.css']
})
export class ListSlotComponent implements OnInit {

  constructor(private _httpService:HttpApiService) { }
  slotList: any = [];

  ngOnInit() {
this.getCourtSlots();
  }

  getCourtSlots(){
    this._httpService.get("/api/courtslot/getallcourtslots").subscribe(result => {
      this.slotList = result;
    }, error => {
      console.log(error);
    });
  }

}
