import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsPage } from './students.page';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StudentService } from '../common/service/student/student.service';
import { ExportFilesService } from '../common/service/exportFile/export.service';
import { Common } from '../common/common.module';

const routes: Routes = [
  {
    path: '',
    component: StudentsPage
  }
];

@NgModule({
  imports: [
	  Common,
    Ng2SmartTableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentsPage],
  providers: [StudentService, ExportFilesService]
})
export class StudentsPageModule {}
