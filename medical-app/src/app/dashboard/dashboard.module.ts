import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { StudentTable } from './tables/students/students.table';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StudentService } from '../common/service/student/student.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SmartTableModule,
    RouterModule.forChild(routes)
  ],
  providers: [StudentService],
  declarations: [DashboardPage, StudentTable]
})
export class DashboardPageModule {}
