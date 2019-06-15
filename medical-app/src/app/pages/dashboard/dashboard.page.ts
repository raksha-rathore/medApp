import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  toggle = true;
  toggle2 = true;
  toggle3 = true;
  constructor() { }

  ngOnInit() {
  }

}
