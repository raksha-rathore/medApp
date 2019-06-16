import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExportAsModule } from 'ngx-export-as';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
    ChartComponent, 
    DownloadButton,
    TableComponent,
} from './components';

import {
    AnalyticsService,
    ExportFilesService,
    StudentService
} from './service'

const BASE_MODULES = [
    NgbModule,
    CommonModule,
	FormsModule,
    IonicModule,
    ExportAsModule,
    ChartsModule,
    Ng2SmartTableModule,
];

const COMPONENTS = [
    ChartComponent,
    DownloadButton,
    TableComponent,
];

const PROVIDERS = [
    AnalyticsService,
    ExportFilesService,
    StudentService
];

@NgModule({
    imports: [...BASE_MODULES ],
    exports: [...BASE_MODULES, ...COMPONENTS],
    declarations: [...COMPONENTS]
})
export class Common {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
          ngModule: Common,
          providers: [...PROVIDERS],
        };
    }
}

