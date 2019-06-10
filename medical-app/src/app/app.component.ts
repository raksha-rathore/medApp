import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    // this.appPages = [
    //   {
    //     title: 'Dashboard',
    //     url: '/dashboard',
    //     direct: 'root',
    //     icon: 'home'
    //   },
    //   {
    //     title: 'Students',
    //     url: '/about',
    //     direct: 'forward',
    //     icon: 'people'
    //   },
    //
    //   {
    //     title: 'Trainings',
    //     url: '/training',
    //     direct: 'forward',
    //     icon: 'medkit'
    //   }
    // ];
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
  }
];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
