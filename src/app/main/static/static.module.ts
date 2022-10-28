import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        StaticRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        TranslateModule
    ]
})
export class StaticModule { }
