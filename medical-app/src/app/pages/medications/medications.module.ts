import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedicationsPage } from './medications.page';
import { DewormingMedicinePage } from './components/deworming-medicine/deworming-medicine.page';
const routes: Routes = [
  {
    path: '',
    component: MedicationsPage,
    children: [
      {
        path: 'deworming-medicine',
        component:DewormingMedicinePage
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
    DewormingMedicinePage,
    MedicationsPage
  ]
})
export class MedicationsPageModule {}
