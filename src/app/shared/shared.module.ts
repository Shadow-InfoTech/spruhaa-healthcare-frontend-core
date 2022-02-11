import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ThemeConstantService } from './services/theme-constant.service';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';



@NgModule({
  declarations: [],
  imports: [
    RouterModule,
        CommonModule,
        NzIconModule,
        NzToolTipModule,
        DemoNgZorroAntdModule,
        NzLayoutModule,
        NzMenuModule,
        // PerfectScrollbarModule
  ],
  exports: [
    CommonModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        NzIconModule,
        // PerfectScrollbarModule,
        
  ],
  providers: [
      ThemeConstantService
  ]
})
export class SharedModule { }
