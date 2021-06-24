import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    MainFooterComponent
  ],
  exports: [
    MainHeaderComponent,
    MainFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
