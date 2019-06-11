import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PresentMedicalHistoryPage } from './present-medical-history.page';

const routes: Routes = [
  {
    path: '',
    component: PresentMedicalHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PresentMedicalHistoryPage]
})
export class PresentMedicalHistoryPageModule {}
