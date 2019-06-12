import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {
    public appPages: any;
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
        url: '/basic-info',
        direct: 'root',
        icon: ''
      },
      {
        title: 'Address',
        url: '/student-profile/address',
        direct: 'forward',
        icon: ''
      },
      {
        title: 'Picture',
        url: '/student-profile/address',
        direct: 'forward',
        icon: ''
      },
    ]
  },
  {
    title: 'Diagonisis',
    icon: 'pulse',
    children: [
      {
        title: 'Present Medical History',
        url: '/diagnosis',
        direct: 'root',
        icon: ''
      },
      {
        title: 'Anthropometric Measurement',
        url: '/diagnosis/anthropometric',
        direct: 'forward',
        icon: ''
      },
    ]
  }
  ];
  }

  ngOnInit() {
  }



}
