import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuildInComponent} from './build-in/build-in.component';

const routes: Routes = [
  {
    path: '',
    component: BuildInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosedRoutingModule { }
