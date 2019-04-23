import { NgModule } from "@angular/core";
/**
 * EL commonModule viene con el uso de directivas (ngIf, ngFor)
 * Pipes
 */
import {CommonModule} from '@angular/common';


import { RouterModule } from '@angular/router';
/**
 * Componentes
 */
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

@NgModule({

    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagesfoundComponent,
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagesfoundComponent,
    ]
})

export class SharedModule {}