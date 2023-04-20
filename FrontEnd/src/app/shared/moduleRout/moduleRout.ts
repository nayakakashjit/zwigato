import { Routes } from '@angular/router';

export const moduleRoutes : Routes = [
    { 
        path: 'home',
        loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
    },
    { 
        path: 'about', 
        loadChildren: () => import('../../modules/about/about.module').then(m => m.AboutModule)
    },
    { 
        path: 'contact',
        loadChildren: () => import('../../modules/contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'account',
        loadChildren: () => import('../../modules/account/account.module').then(m => m.AccountModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('../../modules/user-profile/user-profile.module').then(m => m.UserProfileModule)
    }
]