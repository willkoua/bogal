import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    MainHeaderComponent,
    MainFooterComponent,
    MainSliderComponent
  ],
  exports: [
    MainHeaderComponent,
    MainFooterComponent,
    MainSliderComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatSidenavModule,
  ]
})
export class SharedModule { }
