import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../common/service/analytics/analytics.service';
import { ExportFilesService } from '../../common/service/exportFile/export.service';

@Component({
  selector: 'med-bar-chart',
  templateUrl: './analytics.bar.html'
})
export class AnalyticsBarChart implements OnInit {

  constructor(private service: AnalyticsService, private exportService: ExportFilesService) { 
  }
  private extraOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  private options = {
	  id:  "analytics-bar-chart",
	  cssClass: 'dashboardChart',
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
   private downloadOptions = {
    id: "analytics-bar-download",
	  handler: () => this.export(),
	  iconDownload: true
  };
  private printOptions ={
    id: "analytics-bar-chart"
  };
   export() {
	  this.exportService.exportToPdf("analytics-bar-chart", "analytics-bar-chart");
  }
  print() {
    this.exportService.exportToPrinter("analytics-bar-chart");
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
