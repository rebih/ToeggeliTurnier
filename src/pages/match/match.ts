import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { HomePage } from '../home/home';
import { Dialogs } from '@ionic-native/dialogs';

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

  allPlayers: Observable<any[]>;
  newPlayer: any = '';

  //goal Counters per match
  counterTeam1: number = 0;
  counterTeam2 = 0;

  max = 10;
  radius = 125;
  semicircle = false;

  //choosen players per match
  player1Team1: any = "";
  player2Team1: any = "";
  player1Team2: any = "";
  player2Team2: any = "";

  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider, private dialogs: Dialogs) {
    this.allPlayers = this.firebaseService.getPlayers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }

  //update player information after match
  updatePlayer1Team1() {
    if (this.player1Team1.key != "") {
      //team1 has won
      if (this.counterTeam1 > this.counterTeam2) {
        this.firebaseService.updatePlayer(this.player1Team1.key, this.player1Team1.matchCount + 1, this.player1Team1.win + 1, this.player1Team1.battering, this.player1Team1.shootedGoal + this.counterTeam1, this.player1Team1.collectedGoal + this.counterTeam2)
        //team2 has won
      } else if (this.counterTeam1 < this.counterTeam2) {
        this.firebaseService.updatePlayer(this.player1Team1.key, this.player1Team1.matchCount + 1, this.player1Team1.win, this.player1Team1.battering + 1, this.player1Team1.shootedGoal + this.counterTeam1, this.player1Team1.collectedGoal + this.counterTeam2)
        // tie
      } else {
        this.firebaseService.updatePlayer(this.player1Team1.key, this.player1Team1.matchCount + 1, this.player1Team1.win + 1, this.player1Team1.battering + 1, this.player1Team1.shootedGoal + this.counterTeam1, this.player1Team1.collectedGoal + this.counterTeam2)
      }
    }
  }
  updatePlayer2Team1() {
    if (this.player2Team1 != "") {
      //team1 has won
      if (this.counterTeam1 > this.counterTeam2) {
        this.firebaseService.updatePlayer(this.player2Team1.key, this.player2Team1.matchCount + 1, this.player2Team1.win + 1, this.player2Team1.battering, this.player2Team1.shootedGoal + this.counterTeam1, this.player2Team1.collectedGoal + this.counterTeam2)
        //team2 has won
      } else if (this.counterTeam1 < this.counterTeam2) {
        this.firebaseService.updatePlayer(this.player2Team1.key, this.player2Team1.matchCount + 1, this.player2Team1.win, this.player2Team1.battering + 1, this.player2Team1.shootedGoal + this.counterTeam1, this.player2Team1.collectedGoal + this.counterTeam2)
        //tie
      } else {
        this.firebaseService.updatePlayer(this.player2Team1.key, this.player2Team1.matchCount + 1, this.player2Team1.win + 1, this.player2Team1.battering + 1, this.player2Team1.shootedGoal + this.counterTeam1, this.player2Team1.collectedGoal + this.counterTeam2)
      }
    }
  }
  updatePlayer1Team2() {
    if (this.player1Team2 != "") {
      //team1 has won
      if (this.counterTeam2 > this.counterTeam1) {
        this.firebaseService.updatePlayer(this.player1Team2.key, this.player1Team2.matchCount + 1, this.player1Team2.win + 1, this.player1Team2.battering, this.player1Team2.shootedGoal + this.counterTeam1, this.player1Team2.collectedGoal + this.counterTeam2)
        //team2 has won
      } else if (this.counterTeam2 < this.counterTeam1) {
        this.firebaseService.updatePlayer(this.player1Team2.key, this.player1Team2.matchCount + 1, this.player1Team2.win, this.player1Team2.battering + 1, this.player1Team2.shootedGoal + this.counterTeam1, this.player1Team2.collectedGoal + this.counterTeam2)
        //tie
      } else {
        this.firebaseService.updatePlayer(this.player1Team2.key, this.player1Team2.matchCount + 1, this.player1Team2.win + 1, this.player1Team2.battering + 1, this.player1Team2.shootedGoal + this.counterTeam1, this.player1Team2.collectedGoal + this.counterTeam2)
      }
    }

  }
  updatePlayer2Team2() {
    if (this.player2Team2 != "") {
      //team1 has won
      if (this.counterTeam2 > this.counterTeam1) {
        this.firebaseService.updatePlayer(this.player2Team2.key, this.player2Team2.matchCount + 1, this.player2Team2.win + 1, this.player2Team2.battering, this.player2Team1.shootedGoal + this.counterTeam1, this.player2Team2.collectedGoal + this.counterTeam2)
        //team2 has won
      } else if (this.counterTeam2 < this.counterTeam1) {
        this.firebaseService.updatePlayer(this.player2Team2.key, this.player2Team2.matchCount + 1, this.player2Team2.win, this.player2Team2.battering + 1, this.player2Team2.shootedGoal + this.counterTeam1, this.player2Team2.collectedGoal + this.counterTeam2)
        //tie
      } else {
        this.firebaseService.updatePlayer(this.player2Team2.key, this.player2Team2.matchCount + 1, this.player2Team2.win + 1, this.player2Team2.battering + 1, this.player2Team1.shootedGoal + this.counterTeam1, this.player2Team2.collectedGoal + this.counterTeam2)
      }
    }
  }

  //close and save game after pressing "Spiel beenden" button
  closeAndSaveGame() {
    if (this.player1Team1 && this.player1Team2 != "") {
      this.updatePlayer1Team1();
      this.updatePlayer2Team1();
      this.updatePlayer1Team2();
      this.updatePlayer2Team2();
      this.navCtrl.setRoot(HomePage);
      this.dialogs.alert("Spielstand gespeichert");
    } else {
      this.dialogs.alert("Spieler definieren!")
    }
  }

  countTeam(team: number) {
    if (team == 1) {
      if (this.counterTeam1 <= 9) {
        this.counterTeam1++;
      }

      if (this.counterTeam1 == 10) {
        this.dialogs.alert("Herzlichen Glückwunsch Team 1")
      }
    } else if (team == 2) {
      if (this.counterTeam2 <= 9) {
        this.counterTeam2++;
      }

      if (this.counterTeam2 == 10) {
        this.dialogs.alert("Herzlichen Glückwunsch Team 2")
      }
    }
  }

  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 3.5 + 'px'
    };
  }

}
