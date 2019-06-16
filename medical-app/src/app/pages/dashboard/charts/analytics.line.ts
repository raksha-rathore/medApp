import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../common/service/analytics/analytics.service';
import { ExportFilesService } from '../../common/service/exportFile/export.service';

@Component({
  selector: 'med-line-chart',
  templateUrl: './analytics.bar.html'
})
export class AnalyticsLineChart implements OnInit {

   constructor(private service: AnalyticsService, private exportService:ExportFilesService ) { 
  }
  private extraOptions = {
    responsive: true
  };
  private options = {
	id: "analytics-line-chart",
	cssClass: 'dashboardChart',
    width: "400px",
    height: "200px",
    chartData: this.service.getLineChartData(),
    labels:this.service.getLineChartLabels(),
    chartOptions: this.extraOptions,
    //colorProps: this.service.getColorProps(),
    legend: true,
    chartType: 'line',
    onClick: this.onClick,
    onHover: this.onHover

  }
   private downloadOptions = {
    id: "analytics-line-download",
	handler: () => this.export(),
	iconDownload: true
  };
  private printOptions ={
    id: "analytics-line-chart"
  };
  
   export() {
	  this.exportService.exportToPdf("analytics-line-chart", "analytics-line-chart");
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
