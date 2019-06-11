import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FamilyhistoryComponent } from './familyhistory.component';

const routes: Routes = [
  {
    path: '',
    component: FamilyhistoryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FamilyhistoryComponent]
})
export class FamilyhistoryComponentModule {}
