import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  exports: [
  	NzButtonModule,
  	NzCollapseModule,
  	NzIconModule,
  	NzDividerModule,
    NzRateModule,
    NzAvatarModule,
    NzCarouselModule,
    NzFormModule,
    NzInputModule
  ]
})
export class DemoNgZorroAntdModule {

}