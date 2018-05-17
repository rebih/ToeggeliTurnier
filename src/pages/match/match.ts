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
  player1Team1:any = "";
  player2Team1:any = "";
  player1Team2:any = "";
  player2Team2:any = "";

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
    this.needPlayers = this.firebaseService.getPlayers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }


  updatePlayer1Team1() {
    if (this.player1Team1.key != "") {
      if (this.counterTeam1 > this.counterTeam2) {
        this.firebaseService.updatePlayer(this.player1Team1.key, this.player1Team1.matchCount + 1, this.player1Team1.win + 1, this.player1Team1.battering, this.player1Team1.shootedGoal + this.counterTeam1, this.player1Team1.collectedGoal + this.counterTeam2)
      } else if (this.counterTeam1 < this.counterTeam2) {
        this.firebaseService.updatePlayer(this.player1Team1.key, this.player1Team1.matchCount + 1, this.player1Team1.win, this.player1Team1.battering + 1, this.player1Team1.shootedGoal + this.counterTeam1, this.player1Team1.collectedGoal + this.counterTeam2)
      } else {
        this.firebaseService.updatePlayer(this.player1Team1.key, this.player1Team1.matchCount + 1, this.player1Team1.win + 1, this.player1Team1.battering + 1, this.player1Team1.shootedGoal + this.counterTeam1, this.player1Team1.collectedGoal + this.counterTeam2)
      }
    }
  }
  updatePlayer2Team1() {
    if (this.player2Team1 != "") {
      if (this.counterTeam1 > this.counterTeam2) {
        this.firebaseService.updatePlayer(this.player2Team1.key, this.player2Team1.matchCount + 1, this.player2Team1.win + 1, this.player2Team1.battering, this.player2Team1.shootedGoal + this.counterTeam1, this.player2Team1.collectedGoal + this.counterTeam2)
      } else if (this.counterTeam1 < this.counterTeam2) {
        this.firebaseService.updatePlayer(this.player2Team1.key, this.player2Team1.matchCount + 1, this.player2Team1.win, this.player2Team1.battering + 1, this.player2Team1.shootedGoal + this.counterTeam1, this.player2Team1.collectedGoal + this.counterTeam2)
      } else {
        this.firebaseService.updatePlayer(this.player2Team1.key, this.player2Team1.matchCount + 1, this.player2Team1.win + 1, this.player2Team1.battering + 1, this.player2Team1.shootedGoal + this.counterTeam1, this.player2Team1.collectedGoal + this.counterTeam2)
      }
    }
  }
  updatePlayer1Team2() {
    if (this.player1Team2 != "") {
      if (this.counterTeam2 > this.counterTeam1) {
        this.firebaseService.updatePlayer(this.player1Team2.key, this.player1Team2.matchCount + 1, this.player1Team2.win + 1, this.player1Team2.battering, this.player1Team2.shootedGoal + this.counterTeam1, this.player1Team2.collectedGoal + this.counterTeam2)
      } else if (this.counterTeam2 < this.counterTeam1) {
        this.firebaseService.updatePlayer(this.player1Team2.key, this.player1Team2.matchCount + 1, this.player1Team2.win, this.player1Team2.battering + 1, this.player1Team2.shootedGoal + this.counterTeam1, this.player1Team2.collectedGoal + this.counterTeam2)
      } else {
        this.firebaseService.updatePlayer(this.player1Team2.key, this.player1Team2.matchCount + 1, this.player1Team2.win + 1, this.player1Team2.battering + 1, this.player1Team2.shootedGoal + this.counterTeam1, this.player1Team2.collectedGoal + this.counterTeam2)
      }
    }

  }
  updatePlayer2Team2() {
    if (this.player2Team2 != "") {
      if (this.counterTeam2 > this.counterTeam1) {
        this.firebaseService.updatePlayer(this.player2Team2.key, this.player2Team2.matchCount + 1, this.player2Team2.win + 1, this.player2Team2.battering, this.player2Team1.shootedGoal + this.counterTeam1, this.player2Team2.collectedGoal + this.counterTeam2)
      } else if (this.counterTeam2 < this.counterTeam1) {
        this.firebaseService.updatePlayer(this.player2Team2.key, this.player2Team2.matchCount + 1, this.player2Team2.win, this.player2Team2.battering + 1, this.player2Team2.shootedGoal + this.counterTeam1, this.player2Team2.collectedGoal + this.counterTeam2)
      } else {
        this.firebaseService.updatePlayer(this.player2Team2.key, this.player2Team2.matchCount + 1, this.player2Team2.win + 1, this.player2Team2.battering + 1, this.player2Team1.shootedGoal + this.counterTeam1, this.player2Team2.collectedGoal + this.counterTeam2)
      }
    }
  }

  closeAndSaveGame(){
    this.updatePlayer1Team1();
    this.updatePlayer2Team1();
    this.updatePlayer1Team2();
    this.updatePlayer2Team2();
    this.navCtrl.setRoot(HomePage);
  }

  countTeam1(){
    this.counterTeam1++;

  }
  countTeam2(){
    this.counterTeam2++;
  }


}
