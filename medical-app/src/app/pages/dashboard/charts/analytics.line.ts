import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../common/service/analytics/analytics.service';

@Component({
  selector: 'med-line-chart',
  template: '<med-chart [options]="options"></med-chart>'
})
export class AnalyticsLineChart implements OnInit {

  private extraOptions = {
    responsive: true
  };
  options = {
    width: "400px",
    height: "200px",
    chartData: this.service.getLineChartData(),
    labels:this.service.getLineChartLabels(),
    chartOptions: this.extraOptions,
    colorProps: this.service.getColorProps(),
    legend: true,
    chartType: 'line',
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
