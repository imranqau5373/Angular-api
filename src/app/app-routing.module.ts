import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCourtComponent } from './sportscourt/list-court/list-court.component';
import { CreateCourtComponent } from './sportscourt/create-court/create-court.component';
import { ListSportsComponent } from './sports/list-sports/list-sports.component';
import { CreateSportsComponent } from './sports/create-sports/create-sports.component';
import { ListSlotComponent } from './courtslot/list-slot/list-slot.component';
//import { CreateDurationComponent } from './courtduration/create-duration/create-duration.component';





const routes: Routes = [
  { path: 'courts', children: [{ path: '', component: ListCourtComponent },{ path: 'create', component: CreateCourtComponent },]},
  { path: 'sports', children: [{ path: '', component: ListSportsComponent },{ path: 'create', component: CreateSportsComponent },]},
   { path: 'slots', children: [{ path: '', component: ListSlotComponent }]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
