import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../common/service/analytics/analytics.service';

@Component({
  selector: 'med-bar-chart',
  template: '<med-chart [options]="options"></med-chart>'
})
export class AnalyticsBarChart implements OnInit {

  private extraOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  options = {
    width: "400px",
    height: "200px",
    chartData: this.service.getBarChartData(),
    labels:this.service.getBarChartLabels(),
    chartOptions: this.extraOptions,
    legend: true,
    chartType: 'bar',
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
