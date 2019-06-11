import { ModuleWithProviders, NgModule } from '@angular/core';

import { ChartModule } from 'angular2-chartjs';
import { ChartComponent } from '../../common/templates/charts/chart.component';

import { AnalyticsBarChart } from './analytics.bar';

const components = [
    AnalyticsBarChart,
    ChartComponent
];

@NgModule({
  imports: [ChartModule],
  declarations: [...components]
})
export class AnalyticsModule {
}
