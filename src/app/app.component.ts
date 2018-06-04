import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Icon } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {MatchPage} from '../pages/match/match';
import {StatisticsPage} from '../pages/statistics/statistics';
import {PlayerPage} from '../pages/player/player';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'md-home' },
      { title: 'Spiel', component: MatchPage, icon: 'md-game-controller-b' },
      { title: 'Spieler', component: PlayerPage, icon: 'md-person' },
      { title: 'Statistiken', component: StatisticsPage, icon: 'md-clipboard' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // If the selected page is the home page, set it as root of the navcontroller, else push it onto the stack
    if (page.component == HomePage) {
      this.nav.setRoot(page.component)
    } else {
      this.nav.push(page.component);
    }
  }
}
