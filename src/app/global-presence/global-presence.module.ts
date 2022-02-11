import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalPresenceRoutingModule } from './global-presence-routing.module';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';


@NgModule({
  declarations: [
    GlobalPresenceComponent
  ],
  imports: [
    CommonModule,
    GlobalPresenceRoutingModule
  ]
})
export class GlobalPresenceModule { }
