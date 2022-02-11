import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurProductsRoutingModule } from './our-products-routing.module';
import { OurProductsComponent } from './our-products/our-products.component';


@NgModule({
  declarations: [
    OurProductsComponent
  ],
  imports: [
    CommonModule,
    OurProductsRoutingModule
  ]
})
export class OurProductsModule { }
