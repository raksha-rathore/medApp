import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DownloadButton } from '../common/templates/downloadButton/download.button';

import { StudentsPage } from './students.page';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StudentService } from '../common/service/student/student.service';
import { ExportFilesService } from '../common/service/exportFile/export.service';


const routes: Routes = [
  {
    path: '',
    component: StudentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SmartTableModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentsPage, DownloadButton],
  providers: [StudentService, ExportFilesService]
})
export class StudentsPageModule {}
