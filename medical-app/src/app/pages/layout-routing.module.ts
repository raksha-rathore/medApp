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
        { path: 'medication', loadChildren: './medication/medication.module#MedicationPageModule' },
        { path: 'family-history', loadChildren: './family-history/family-history.module#FamilyHistoryPageModule' },
        { path: 'student-profile', loadChildren: './student-profile/student-profile.module#StudentProfilePageModule' },
        { path: 'diagnosis', loadChildren: './diagnosis/diagnosis.module#DiagnosisPageModule' },
         { path: 'students', loadChildren: './students/students.module#StudentsPageModule' }
      ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
