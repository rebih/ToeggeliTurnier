import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';


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

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
    this.needPlayers = this.firebaseService.getItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }

}
