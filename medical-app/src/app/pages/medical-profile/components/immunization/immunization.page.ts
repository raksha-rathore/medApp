import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immunization',
  templateUrl: './immunization.page.html',
  styleUrls: ['./immunization.page.scss'],
})
export class ImmunizationPage implements OnInit {
  public groups = [];
  constructor() { }
  public vaccinationNamesList: any = [];
  ngOnInit() {
    this.vaccinationNamesList = [
      {
        "VaccinationName":"Chickenpox"
      },
      {
        "VaccinationName":"Hepatitis"
      },
      {
        "VaccinationName":"Influenza"
      },
      {
        "VaccinationName":"Pneumococcal"
      },
      {
        "VaccinationName":"Meningococcal"
      },
      {
        "VaccinationName":"Polio"
      },
      {
        "VaccinationName":"Tetanus"
      },
      {
        "VaccinationName":"diphtheria"
      }
    ]

    for (let i=0; i<2; i++) {
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
