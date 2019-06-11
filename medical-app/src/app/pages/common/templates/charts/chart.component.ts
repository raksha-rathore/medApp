import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'med-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {

    @Input() options: object;
    constructor() { 
 
    }

    ngOnInit() {
    }
}
