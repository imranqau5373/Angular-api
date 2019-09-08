import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { HttpApiService } from './shared/service/http-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCourtComponent } from './sportscourt/create-court/create-court.component';
import { ListCourtComponent } from './sportscourt/list-court/list-court.component';
import { ListSportsComponent } from './sports/list-sports/list-sports.component';
import { CreateSportsComponent } from './sports/create-sports/create-sports.component';
import { CreateDurationComponent } from './courtduration/create-duration/create-duration.component';
import { ListDurationComponent } from './courtduration/list-duration/list-duration.component';
import { ListSlotComponent } from './courtslot/list-slot/list-slot.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCourtComponent,
    ListCourtComponent,
    ListSportsComponent,
    CreateSportsComponent,
    CreateDurationComponent,
    ListDurationComponent,
    ListSlotComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [HttpApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
