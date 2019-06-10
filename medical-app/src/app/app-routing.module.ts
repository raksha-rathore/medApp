import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'training', loadChildren: './trainings/training.module#TrainingModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'form', loadChildren: './form/form.module#FormPageModule' },
  { path: 'student-profile', loadChildren: './student-profile/student-profile.module#StudentProfilePageModule' },
  { path: 'basic-info', loadChildren: './student-profile/components/basic-info/basic-info.module#BasicInfoPageModule' },
  { path: 'address-info', loadChildren: './student-profile/components/address/address.module#AddressPageModule' },
  { path: 'pic-upload', loadChildren: './student-profile/components/pic-upload/pic-upload.module#PicUploadPageModule' },
  { path: 'diagnosis', loadChildren: './diagnosis/diagnosis.module#DiagnosisPageModule' },
  { path: 'present-medical-history', loadChildren: './diagnosis/components/present-medical-history/present-medical-history.module#PresentMedicalHistoryPageModule' },
  { path: 'anthropometric-measeurements', loadChildren: './diagnosis/components/anthropometric-measeurements/anthropometric-measeurements.module#AnthropometricMeaseurementsPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
