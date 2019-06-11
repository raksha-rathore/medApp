import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';

import { StudentTable } from './tables/students/students.table';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StudentService } from '../common/service/student/student.service';

import { AnalyticsService }from '../common/service/analytics/analytics.service';
import { AnalyticsLineChart } from './charts/analytics.line';
import { AnalyticsBarChart } from './charts/analytics.bar';
import { AnalyticsDoghnutChart } from './charts/analytics.doghnut';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from '../common/templates/charts/chart.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

const components = [
  DashboardPage,
  StudentTable,
  AnalyticsLineChart,
  AnalyticsBarChart,
  AnalyticsDoghnutChart,
  ChartComponent
];

const modules = [
  CommonModule,
  FormsModule,
  IonicModule,
  Ng2SmartTableModule,
  ChartsModule
];

const providers = [
  StudentService,
  AnalyticsService
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
