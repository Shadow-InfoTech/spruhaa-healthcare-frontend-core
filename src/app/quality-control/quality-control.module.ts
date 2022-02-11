import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityControlRoutingModule } from './quality-control-routing.module';
import { QualityControlComponent } from './quality-control/quality-control.component';


@NgModule({
  declarations: [
    QualityControlComponent
  ],
  imports: [
    CommonModule,
    QualityControlRoutingModule
  ]
})
export class QualityControlModule { }
