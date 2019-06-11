import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public form = [
    { val: 'Telugu', isChecked: true },
    { val: 'English', isChecked: false },
    { val: 'Hindi', isChecked: false }
  ];

}
