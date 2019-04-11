import { NgModule } from "@angular/core";
/**
 * Componentes
 */
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

@NgModule({

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