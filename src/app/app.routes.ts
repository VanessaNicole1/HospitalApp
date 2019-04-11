
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagesfoundComponent } from './shared/nopagesfound/nopagesfound.component';

const APP_ROUTING: Routes = [
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagesfoundComponent },
];


export const APP_ROUTES = RouterModule.forRoot(APP_ROUTING, { useHash: true});
