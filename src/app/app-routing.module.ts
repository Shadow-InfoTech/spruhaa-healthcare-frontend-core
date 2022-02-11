import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { CommonLayout_ROUTES } from './shared/routes/common-layout.routes';

const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    children: CommonLayout_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
