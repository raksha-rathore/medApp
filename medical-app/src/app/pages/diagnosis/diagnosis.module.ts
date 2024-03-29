import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiagnosisPage } from './diagnosis.page';
import { PresentMedicalHistoryPage } from './components/present-medical-history/present-medical-history.page';
import { AnthropometricMeaseurementsPage } from './components/anthropometric-measeurements/anthropometric-measeurements.page';
import { PhysicalExaminationPage } from './components/physical-examination/physical-examination.page';
const routes: Routes = [
  {
    path: '',
    component: DiagnosisPage,
    children: [
      {
        path: 'medical-info',
        component:PresentMedicalHistoryPage
      },
      {
        path: 'anthropometric-info',
        component: AnthropometricMeaseurementsPage
      },
      {
        path: 'physical-examination-info',
        component: PhysicalExaminationPage
      }
    ]
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DiagnosisPage,
    PresentMedicalHistoryPage,
    AnthropometricMeaseurementsPage,
    PhysicalExaminationPage
  ]
})
export class DiagnosisPageModule {}
