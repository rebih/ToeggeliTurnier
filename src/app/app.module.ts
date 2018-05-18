import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import {TournamentPage} from '../pages/tournament/tournament';
import {MatchPage} from '../pages/match/match';
//import {PlayingSchedulePage} from '../pages/playing-schedule/playing-schedule';
import {StatisticsPage} from '../pages/statistics/statistics';
import {PlayerPage} from '../pages/player/player';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

import {HttpModule} from '@angular/http';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyDaYdie94jWq0b-TRGs1-5rGHDAnnNb82E",
  authDomain: "toeggeliapp.firebaseapp.com",
  databaseURL: "https://toeggeliapp.firebaseio.com",
  projectId: "toeggeliapp",
  storageBucket: "toeggeliapp.appspot.com",
  messagingSenderId: "521751331381"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlayerPage,
    //TournamentPage,
    MatchPage,
    //PlayingSchedulePage,
    StatisticsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //TournamentPage,
    PlayerPage,
    MatchPage,
   // PlayingSchedulePage,
    StatisticsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
