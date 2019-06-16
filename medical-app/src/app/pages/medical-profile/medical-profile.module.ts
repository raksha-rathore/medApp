import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MedicalProfilePage } from './medical-profile.page';
import { FamilyHistoryPage } from './components/family-history/family-history.page';
import { BirthHistoryPage } from './components/birth-history/birth-history.page';
import { ImmunizationPage } from './components/immunization/immunization.page';
import { MedicalSurgicalInfoPage } from './components/medical-surgical-info/medical-surgical-info.page';
const routes: Routes = [
    {
      path: '',
      component: MedicalProfilePage,
      children: [
        {
          path: 'family-history',
          component:FamilyHistoryPage
        },
        {
          path: 'birth-history',
          component: BirthHistoryPage
        },
        {
          path: 'immunization',
          component: ImmunizationPage
        },
        {
          path: 'medical-surgical-info',
          component: MedicalSurgicalInfoPage
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IonicModule,
      RouterModule.forChild(routes)
    ],
    declarations: [
      FamilyHistoryPage,
      BirthHistoryPage,
      ImmunizationPage,
      MedicalSurgicalInfoPage,
      MedicalProfilePage
    ]
  })
  export class MedicalProfilePageModule {}
  
  