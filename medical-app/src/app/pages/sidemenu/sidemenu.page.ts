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
    icon: 'home',
  },
  {
    title: 'Students',
    url: '/dashboard',
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
    children: [
      {
        title: 'Basic Information',
        url: '/basic-info',
        direct: 'root',
        icon: 'add'
      },
      {
        title: 'Address',
        url: '/student-profile/address',
        direct: 'forward',
        icon: 'home'
      },
      {
        title: 'Picture',
        url: '/student-profile/address',
        direct: 'forward',
        icon: 'reverse-camera'
      },
    ]
  },
  {
    title: 'Diagonisis',
    children: [
      {
        title: 'Present Medical History',
        url: '/diagnosis',
        direct: 'root',
        icon: 'add'
      },
      {
        title: 'Anthropometric Measurement',
        url: '/diagnosis/anthropometric',
        direct: 'forward',
        icon: 'add'
      },
    ]
  }
  ];
  }

  ngOnInit() {
  }



}