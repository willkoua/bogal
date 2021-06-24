import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  /*{
    path: '',
    loadChildren: () =>
      import('./main/closed/closed.module').then(
        m => m.ClosedModule
      ),
  },*/
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./main/static/static.module').then(
        m => m.StaticModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
