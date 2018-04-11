import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Icon } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {TournamentPage} from '../pages/tournament/tournament';
import {MatchPage} from '../pages/match/match';
import {PlayingSchedulePage} from '../pages/playing-schedule/playing-schedule';
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
      { title: 'Spieler', component: PlayerPage, icon: 'md-player' },
      { title: 'Turnier', component: TournamentPage, icon: 'md-grid' },
      { title: 'Spiel', component: MatchPage, icon: 'md-game-controller-b' },
      { title: 'Spielplan', component: PlayingSchedulePage, icon: 'md-calendar' },
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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
