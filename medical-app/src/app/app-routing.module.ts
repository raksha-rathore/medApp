import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'training', loadChildren: './pages/trainings/training.module#TrainingModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'bmi', loadChildren: './pages/bmi/bmi.module#BmiPageModule' },
  { path: 'mensuration', loadChildren: './pages/mensuration/mensuration.module#MensurationPageModule' },
  { path: 'student-profile', loadChildren: './pages/student-profile/student-profile.module#StudentProfilePageModule' },
  { path: 'diagnosis', loadChildren: './pages/diagnosis/diagnosis.module#DiagnosisPageModule' },
  { path: 'students', loadChildren: './pages/students/students.module#StudentsPageModule' },
  { path: 'medical-profile', loadChildren: './pages/medical-profile/medical-profile.module#MedicalProfilePageModule' },
  { path: 'medications', loadChildren: './pages/medications/medications.module#MedicationsPageModule' },
  { path: 'morbidity', loadChildren: './pages/morbidity/morbidity.module#MorbidityPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
