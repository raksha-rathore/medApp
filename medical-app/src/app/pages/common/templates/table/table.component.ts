import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class ChartComponent implements OnInit {

    @Input() options: object;
    constructor() { 
 
    }

    ngOnInit() {
    }
}
