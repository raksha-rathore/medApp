import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

import { AnalyticsService }from '../common/service/analytics/analytics.service';
import { ExportFilesService } from '../common/service/exportFile/export.service';
import { AnalyticsLineChart } from './charts/analytics.line';
import { AnalyticsBarChart } from './charts/analytics.bar';
import { AnalyticsDoghnutChart } from './charts/analytics.doghnut';
import { Common } from '../common/common.module';
import { NgxPrintModule } from 'ngx-print';


const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

const components = [
  DashboardPage,
  AnalyticsLineChart,
  AnalyticsBarChart,
  AnalyticsDoghnutChart,
];

const modules = [
  Common,
  NgxPrintModule
];

const providers = [
  AnalyticsService,
  ExportFilesService
];



@NgModule({
  imports: [
    ...modules,
    RouterModule.forChild(routes)
  ],
  providers: [...providers],
  declarations: [...components]
})
export class DashboardPageModule {
  

}
