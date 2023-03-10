import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowComponent} from "./tour/show/show.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tour/tour.module').then(module => module.TourModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
