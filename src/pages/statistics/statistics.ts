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

  allPlayers: Observable<any[]>;
  showSpinner: boolean = true

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
    this.allPlayers = this.firebaseService.getPlayers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');
    this.allPlayers.subscribe(() => this.showSpinner = false)
  }

}
