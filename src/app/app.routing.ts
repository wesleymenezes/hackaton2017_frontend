import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { homeControllerTopMenuRouter } from './home-controller/home-controller-top-menu/home-controller-top-menu.router';


const routes: Routes = [
    //{path: '', component: BillingDashboardComponent }
    ...homeControllerTopMenuRouter,
    { path: '', redirectTo: 'home-controller', pathMatch: 'full'},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
