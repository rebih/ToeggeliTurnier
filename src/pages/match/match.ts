import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import {HomePage} from '../home/home';

/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  needPlayers: Observable<any[]>;
  newPlayer: any = '';
  counterTeam1 = 0;
  counterTeam2 = 0;

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
    this.needPlayers = this.firebaseService.getPlayers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }

  closeAndSaveGame(){
    this.navCtrl.setRoot(HomePage);
  }

  countTeam1(){
    this.counterTeam1++;

  }
  countTeam2(){
    this.counterTeam2++;
  }

}
