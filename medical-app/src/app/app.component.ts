// import { Component } from '@angular/core';
//
// import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html'
// })
// export class AppComponent {
//   constructor(
//     private platform: Platform,
//     private splashScreen: SplashScreen,
//     private statusBar: StatusBar
//   ) {
//     this.initializeApp();
//   }
//
//   initializeApp() {
//     this.platform.ready().then(() => {
//       this.statusBar.styleDefault();
//       this.splashScreen.hide();
//     });
//   }
// }
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
    this.appPages = [
      {
        title: 'Dashboard',
        url: '/dashboard',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Students',
        url: '/student-profile',
        direct: 'forward',
        icon: 'people'
      },

      {
        title: 'Trainings',
        url: '/training',
        direct: 'forward',
        icon: 'medkit'
      },
      {
        title: 'Present Medical History',
        url: '/present-medical-history',
        direct: 'forward',
        icon: 'medkit'
      },
      {
        title: 'Address Info',
        url: '/address-info',
        direct: 'forward',
        icon: 'medkit'
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
