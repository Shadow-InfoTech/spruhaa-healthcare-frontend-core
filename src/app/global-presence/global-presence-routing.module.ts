import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalPresenceComponent,
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalPresenceRoutingModule { }
