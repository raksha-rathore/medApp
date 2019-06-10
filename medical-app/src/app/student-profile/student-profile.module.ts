import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentProfilePage } from './student-profile.page';
import { AddressPage } from './components/address/address.page';
import { BasicInfoPage } from './components/basic-info/basic-info.page';
import { PicUploadPage } from './components/pic-upload/pic-upload.page';
const routes: Routes = [
  {
    path: '',
    component: StudentProfilePage
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
    PicUploadPage,
    StudentProfilePage
  ],
  entryComponents: [
    AddressPage,
    BasicInfoPage,
    PicUploadPage,
    StudentProfilePage
  ]
})
export class StudentProfilePageModule {}
