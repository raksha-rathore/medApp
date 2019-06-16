import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physical-examination',
  templateUrl: './physical-examination.page.html',
  styleUrls: ['./physical-examination.page.scss'],
})
export class PhysicalExaminationPage implements OnInit {
  public groups = [];
  
  constructor() { }

  ngOnInit() {
    for (let i=0; i<10; i++) {
      this.groups[i] = {
        show: false
      };
    }
  }

  open(index){
    this.groups[index].show = !this.groups[index].show;
  }
  
  public toggleGroup(group){
    group.show = !group.show;
  }
  public isGroupShown(group){
    return group.show;
  }
  
}
