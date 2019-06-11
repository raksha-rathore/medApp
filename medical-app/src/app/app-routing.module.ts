import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: 'training', loadChildren: './trainings/training.module#TrainingModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'bmi', loadChildren: './bmi/bmi.module#BmiPageModule' },
  { path: 'mensuration', loadChildren: './mensuration/mensuration.module#MensurationPageModule' },
  { path: 'medication', loadChildren: './medication/medication.module#MedicationPageModule' },
  { path: 'family-history', loadChildren: './family-history/family-history.module#FamilyHistoryPageModule' },
  { path: 'form', loadChildren: '.pages/form/form.module#FormPageModule' },
  { path: 'student-profile', loadChildren: '.pages/student-profile/student-profile.module#StudentProfilePageModule' },
  { path: 'basic-info', loadChildren: './student-profile/components/basic-info/basic-info.module#BasicInfoPageModule' },
  { path: 'address-info', loadChildren: './student-profile/components/address/address.module#AddressPageModule' },
  { path: 'pic-upload', loadChildren: './student-profile/components/pic-upload/pic-upload.module#PicUploadPageModule' },
  { path: 'diagnosis', loadChildren: '.pages/diagnosis/diagnosis.module#DiagnosisPageModule' },
  { path: 'present-medical-history', loadChildren: './diagnosis/components/present-medical-history/present-medical-history.module#PresentMedicalHistoryPageModule' },
  { path: 'anthropometric-measeurements', loadChildren: './diagnosis/components/anthropometric-measeurements/anthropometric-measeurements.module#AnthropometricMeaseurementsPageModule' },
  // { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  // { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  // { path: 'ionic', loadChildren: './pages/ionic/ionic.module#IonicPageModule' },
  // { path: 'flutter', loadChildren: './pages/flutter/flutter.module#FlutterPageModule' },
  { path: 'students', loadChildren: './pages/students/students.module#StudentsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
