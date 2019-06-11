import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FamilyHistoryComponent } from './family-history.component';

const routes: Routes = [
  {
    path: '',
    component: FamilyHistoryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FamilyHistoryComponent]
})
export class FamilyHistoryComponentModule {}
