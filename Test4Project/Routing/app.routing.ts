
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "../Components/app.component";
import { HeroListComponent } from '../Components/herolist.component';
import { AboutComponent } from '../Components/about.component';

const appRoutes: Routes = [
    {
        path: 'herolist',
        component: HeroListComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);