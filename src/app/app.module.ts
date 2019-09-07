import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCourtComponent } from './sportscourt/create-court/create-court.component';
import { ListCourtComponent } from './sportscourt/list-court/list-court.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCourtComponent,
    ListCourtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
