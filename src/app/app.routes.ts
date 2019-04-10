
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagesfoundComponent } from './shared/nopagesfound/nopagesfound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './login/register.component';

const APP_ROUTING: Routes = [
    { 
        path: '',
         component: PagesComponent,
         children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
         ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagesfoundComponent },
];


export const APP_ROUTES = RouterModule.forRoot(APP_ROUTING, { useHash: true});
