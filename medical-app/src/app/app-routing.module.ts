import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'training', loadChildren: './trainings/training.module#TrainingModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'sidemenu', loadChildren: './sidemenu/sidemenu.module#SidemenuPageModule' },

  // { path: 'form', loadChildren: './form/form.module#FormPageModule' },
  // { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  // { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  // { path: 'ionic', loadChildren: './pages/ionic/ionic.module#IonicPageModule' },
  // { path: 'flutter', loadChildren: './pages/flutter/flutter.module#FlutterPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
