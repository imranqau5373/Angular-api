import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination';
import { ListBookingComponent } from './courtbooking/list-booking/list-booking.component';
import { CreateBookingComponent } from './courtbooking/create-booking/create-booking.component';
import { ViewSportsComponent } from './sports/view-sports/view-sports.component';
import { EditSportsComponent } from './sports/edit-sports/edit-sports.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCourtComponent,
    ListCourtComponent,
    ListSportsComponent,
    CreateSportsComponent,
    CreateDurationComponent,
    ListDurationComponent,
    ListSlotComponent,
    SignUpComponent,
    SignInComponent,
    ListBookingComponent,
    CreateBookingComponent,
    ViewSportsComponent,
    EditSportsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule

  ],
  providers: [HttpApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
