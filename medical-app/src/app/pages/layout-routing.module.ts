import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
        { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
        { path: 'bmi', loadChildren: './bmi/bmi.module#BmiPageModule' },
        { path: 'mensuration', loadChildren: './mensuration/mensuration.module#MensurationPageModule' },
        { path: 'training', loadChildren: './trainings/training.module#TrainingModule' },
        { path: 'student-profile', loadChildren: './student-profile/student-profile.module#StudentProfilePageModule' },
        { path: 'diagnosis', loadChildren: './diagnosis/diagnosis.module#DiagnosisPageModule' },
        { path: 'students', loadChildren: './students/students.module#StudentsPageModule' },
        { path: 'medical-profile', loadChildren: './medical-profile/medical-profile.module#MedicalProfilePageModule' },
        { path: 'medications', loadChildren: './medications/medications.module#MedicationsPageModule' },
        { path: 'morbidity', loadChildren: './morbidity/morbidity.module#MorbidityPageModule' },
        { path: 'mensuration', loadChildren: './mensuration/mensuration.module#MensurationPageModule' }
      ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
