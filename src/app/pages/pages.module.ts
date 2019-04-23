import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


/**
 * Plugins
 */
import { ChartsModule } from 'ng2-charts';

/**
 * Componentes
 */
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';

/**
 * Rutas de pages
 */
import { PAGES_ROUTES } from './pages.routes';



/**
 * Temporal
 */

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficodonaComponent } from '../components/graficodona/graficodona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent,
        GraficodonaComponent,
        AccoutSettingsComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {}