import { Component, OnInit, Input  } from '@angular/core';

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
    private width:string = "15px";
    private height:string = "15px";
}
