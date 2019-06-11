import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FamilyHistoryPage } from './family-history.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FamilyHistoryPage]
})
export class FamilyHistoryPageModule {}
