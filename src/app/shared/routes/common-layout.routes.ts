import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: '',
        redirectTo : 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('../../homepage/homepage.module').then(m => m.HomepageModule),
    },
    {
        path: 'about-us',
        loadChildren: () => import('../../about-us/about-us.module').then(m => m.AboutUsModule),
    },
    {
        path: 'quality-control',
        loadChildren: () => import('../../quality-control/quality-control.module').then(m => m.QualityControlModule),
    },
    {
        path: 'our-products',
        loadChildren: () => import('../../our-products/our-products.module').then(m => m.OurProductsModule),
    },
    {
        path: 'consulting',
        loadChildren: () => import('../../consulting/consulting.module').then(m => m.ConsultingModule),
    },
    {
        path: 'global-presence',
        loadChildren: () => import('../../global-presence/global-presence.module').then(m => m.GlobalPresenceModule),
    },
    {
        path: 'contact-us',
        loadChildren: () => import('../../contact-us/contact-us.module').then(m => m.ContactUsModule),
    }
];