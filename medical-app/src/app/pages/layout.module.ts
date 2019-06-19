import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy  } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidemenuPage } from './sidemenu/sidemenu.page';
import { SidemenuService } from './common/service/sidemenu/sidemenu.service';


@NgModule({
  declarations: [LayoutComponent, SidemenuPage],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    LayoutRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SidemenuService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class LayoutModule {}
