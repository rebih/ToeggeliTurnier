import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlayerPage } from '../player/player';
import { TournamentPage} from '../tournament/tournament';
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

  OpenTournamentPage(){
    this.navCtrl.setRoot(TournamentPage)
  }
}
