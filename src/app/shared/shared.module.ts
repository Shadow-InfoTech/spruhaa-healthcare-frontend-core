import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { ThemeConstantService } from './services/theme-constant.service';



@NgModule({
  declarations: [SearchPipe],
  imports: [
    RouterModule,
        CommonModule,
        NzIconModule,
        NzToolTipModule,
        // PerfectScrollbarModule
  ],
  exports: [
    CommonModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        NzIconModule,
        // PerfectScrollbarModule,
        SearchPipe
  ],
  providers: [
      ThemeConstantService
  ]
})
export class SharedModule { }
