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
    title: 'Trainings',
    url: '/training',
    direct: 'forward',
    icon: 'medkit',
  },
  {
    title: 'Basic Information',
    children: [
      {
        title: 'Dashboard',
        url: '/dashboard',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Students',
        url: '/about',
        direct: 'forward',
        icon: 'people'
      },
    ]
  },
  {
    title: 'Diagonisis',
    children: [
      {
        title: 'DB1',
        url: '/training',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Students',
        url: '/about',
        direct: 'forward',
        icon: 'people'
      },
    ]
  }
  ];
  }

  ngOnInit() {
  }



}
