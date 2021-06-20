import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosedRoutingModule } from './closed-routing.module';
import { BuildInComponent } from './build-in/build-in.component';


@NgModule({
  declarations: [
    BuildInComponent
  ],
  imports: [
    CommonModule,
    ClosedRoutingModule
  ]
})
export class ClosedModule { }
