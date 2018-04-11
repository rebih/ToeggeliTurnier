import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlayerPage } from '../player/player'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  OpenPlayerPage(){
    this.navCtrl.setRoot(PlayerPage);
  }
}
