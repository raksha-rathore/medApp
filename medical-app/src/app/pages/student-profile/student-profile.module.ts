import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StudentProfilePage } from './student-profile.page';
import { AddressPage } from './components/address/address.page';
import { BasicInfoPage } from './components/basic-info/basic-info.page';
// const routes: Routes = [
//   {
//     path: '',
//     component: StudentProfilePage,
//     loadChildren:'./components/basic-info/basic-info.module#BasicInfoPageModule'
//   },
//   {
//     path: 'basic-info',
//     component: BasicInfoPage,
//   },
//   {
//     path: 'address',
//    component: AddressPage,
//     loadChildren:'./components/address/address.module#AddressPageModule'
//   },
//   {
//     path: 'pic-upload',
//     component: PicUploadPage
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: StudentProfilePage,
    children: [
      {
        path: 'basic-info',
        component:BasicInfoPage
      },
      {
        path: 'address-info',
        component: AddressPage
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AddressPage,
    BasicInfoPage,
    // PicUploadPage,
    StudentProfilePage
  ],
  exports:[
    RouterModule,
    StudentProfilePageModule
  ]
})
export class StudentProfilePageModule {}
