import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {
  public appPages: any;
  public imgURL = "../../assets/images/logo.png";
  constructor() {
    this.appPages = [
      {
        title: 'Dashboard',
        url: '/dashboard',
        direct: 'forward',
        icon: 'analytics',
      },
      {
        title: 'Students',
        url: '/students',
        direct: 'forward',
        icon: 'people',
      },
      {
        title: 'Trainings',
        url: '/training',
        direct: 'forward',
        icon: 'medkit',
      },
      {
        title: 'Student Profile',
        icon: 'person',
        children: [
          {
            title: 'Basic Information',
            url: '/student-profile/basic-info',
            direct: 'root',
            icon: ''
          },
          {
            title: 'Address',
            url: '/student-profile/address-info',
            direct: 'forward',
            icon: ''
          },
          {
            title: 'Pic Upload',
            url: '/student-profile/pic-upload',
            direct: 'forward',
            icon: ''
          },
        ]
      },
      {
        title: 'Medical Profile',
        icon: 'person',
        children: [
          {
            title: 'Family History',
            url: '/medical-profile/family-history',
            direct: 'root',
            icon: ''
          },
          {
            title: 'Birth History',
            url: '/medical-profile/birth-history',
            direct: 'forward',
            icon: ''
          },
          {
            title: 'Immunization',
            url: '/medical-profile/immunization',
            direct: 'forward',
            icon: ''
          },
          {
            title: 'Medical & Surgical',
            url: '/medical-profile/medical-surgical-info',
            direct: 'forward',
            icon: ''
          },
        ]
      },
      {
        title: 'Diagnosis',
        icon: 'pulse',
        children: [
          {
            title: 'Present Medical History',
            url: '/diagnosis/medical-info',
            direct: 'root',
            icon: ''
          },
          {
            title: 'Anthropometric Measurement',
            url: '/diagnosis/anthropometric-info',
            direct: 'forward',
            icon: ''
          },
          {
            title: 'Physical Examination',
            url: '/diagnosis/physical-examination-info',
            direct: 'forward',
            icon: 'add'
          }
        ]
      },
      {
        title: 'Medications',
        icon: 'pulse',
        children: [
          {
            title: 'Deworming Medicine',
            url: '/medications/deworming-medicine',
            direct: 'root',
            icon: ''
          }
        ]
      },
      {
        title: 'Morbidity',
        url: '/morbidity',
        direct: 'forward',
        icon: 'medkit',
      },
      {
        title: 'BMI',
        url: '/bmi',
        direct: 'forward',
        icon: 'medkit',
      },
      {
        title: 'Mensuration',
        url: '/mensuration',
        direct: 'forward',
        icon: 'medkit',
      }
    ]
  }
  ngOnInit() {
      }



}
