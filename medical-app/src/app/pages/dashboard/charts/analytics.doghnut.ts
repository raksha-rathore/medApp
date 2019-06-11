import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../common/service/analytics/analytics.service';

@Component({
  selector: 'med-doghnut-chart',
  template: '<med-chart [options]="options"></med-chart>'
})
export class AnalyticsDoghnutChart implements OnInit {

  private extraOptions = {
    responsive: true
  };
  options = {
    width: "400px",
    height: "400px",
    chartData: this.service.getDoghnutChartData(),
    labels:this.service.getDoghnutChartLabels(),
    chartOptions: this.extraOptions,
    legend: true,
    chartType: 'doughnut',
    onClick: this.onClick,
    onHover: this.onHover

  }
  
  constructor(private service: AnalyticsService) { 
  }

  ngOnInit() {
  }
  
  // events
  private onClick(e:any):void {
    console.log(e);
  }
  
  private onHover(e:any):void {
    console.log(e);
  }

}
