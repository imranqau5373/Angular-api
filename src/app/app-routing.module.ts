import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCourtComponent } from './sportscourt/list-court/list-court.component';
import { CreateCourtComponent } from './sportscourt/create-court/create-court.component';


const routes: Routes = [
  { path: 'court', children: [{ path: '', component: ListCourtComponent },{ path: 'create', component: CreateCourtComponent },]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
