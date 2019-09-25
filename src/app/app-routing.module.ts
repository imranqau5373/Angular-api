import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCourtComponent } from './sportscourt/list-court/list-court.component';
import { CreateCourtComponent } from './sportscourt/create-court/create-court.component';
import { ListSportsComponent } from './sports/list-sports/list-sports.component';
import { CreateSportsComponent } from './sports/create-sports/create-sports.component';
import { ListSlotComponent } from './courtslot/list-slot/list-slot.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { ListBookingComponent } from './courtbooking/list-booking/list-booking.component';
import { CreateBookingComponent } from './courtbooking/create-booking/create-booking.component';


//import { CreateDurationComponent } from './courtduration/create-duration/create-duration.component';





const routes: Routes = [
  { path: 'courts', children: [{ path: '', component: ListCourtComponent },{ path: 'create', component: CreateCourtComponent },]},
  { path: 'sports', children: [{ path: '', component: ListSportsComponent },{ path: 'create', component: CreateSportsComponent },]},
  { path: 'booking', children: [{ path: '', component: ListBookingComponent },{ path: 'create', component: CreateBookingComponent },]},
   { path: 'slots', children: [{ path: '', component: ListSlotComponent }]},
   { path: 'signup', children: [{ path: '', component: SignUpComponent }]},
   { path: 'signin', children: [{ path: '', component: SignInComponent }]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
