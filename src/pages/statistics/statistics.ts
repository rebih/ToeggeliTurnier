import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { Observable } from 'rxjs/Observable';



/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  needPlayers: Observable<any[]>;

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
    this.needPlayers = this.firebaseService.getPlayers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');
  }

}
