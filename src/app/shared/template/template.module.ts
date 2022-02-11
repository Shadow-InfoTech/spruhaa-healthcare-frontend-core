import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared.module';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ThemeConstantService } from '../services/theme-constant.service';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

const antdModule = [
    NzAvatarModule,
    NzBadgeModule,
    NzRadioModule,
    NzDropDownModule,
    NzListModule,
    NzDrawerModule,
    NzDividerModule,
    NzSwitchModule,
    NzInputModule,
    NzButtonModule
]

@NgModule({
    exports: [
        CommonModule,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        SharedModule,
        ...antdModule,
        DemoNgZorroAntdModule,
        NzLayoutModule,
        NzMenuModule,
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [ 
        ThemeConstantService
    ]
})

export class TemplateModule { }
