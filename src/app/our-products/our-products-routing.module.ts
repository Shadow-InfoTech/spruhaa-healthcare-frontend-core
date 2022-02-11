import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurProductsComponent } from './our-products/our-products.component';

const routes: Routes = [
  {
    path: '',
    component: OurProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurProductsRoutingModule { }
