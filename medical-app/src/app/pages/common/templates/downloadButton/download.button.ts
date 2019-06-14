import { Component, OnInit, Input  } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'med-download',
  templateUrl: './download.button.html'
})
export class DownloadButton implements OnInit {

    @Input() options: object;
    constructor() { 
 
    }

    ngOnInit() {

    }
}
