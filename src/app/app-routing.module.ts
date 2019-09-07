import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCourtComponent } from './sportscourt/list-court/list-court.component';
import { CreateCourtComponent } from './sportscourt/create-court/create-court.component';
import { ListSportsComponent } from './sports/list-sports/list-sports.component';
import { CreateSportsComponent } from './sports/create-sports/create-sports.component';




const routes: Routes = [
  { path: 'court', children: [{ path: '', component: ListCourtComponent },{ path: 'create', component: CreateCourtComponent },]},
  { path: 'sports', children: [{ path: '', component: ListSportsComponent },{ path: 'create', component: CreateSportsComponent },]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
