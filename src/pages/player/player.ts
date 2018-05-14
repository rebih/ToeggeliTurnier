import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database';
import {AngularFireDatabase} from 'angularfire2/database';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';


/**
 * Generated class for the PlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

playerRef: AngularFireList<any>;
player: Observable<any[]>;

needPlayers: Observable<any[]>;
newPlayer: any = '';

@ViewChild(Content) content: Content;

constructor(public afd: AngularFireDatabase, public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
  this.needPlayers = this.firebaseService.getPlayers();
  this.playerRef = this.afd.list('/Players/');
  this.player = this.playerRef.snapshotChanges().map(changes => {
    return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  });
}

addPlayer(){
  if(this.newPlayer.length === 0 || !this.newPlayer.trim()){
  console.log("empty"); }else{
  this.firebaseService.addPlayer(this.newPlayer).then(()=>{
  this.newPlayer = "";
  // this.keyboard.close();
  this.content.scrollToBottom();
  }); }
  }

  updatePlayer(key, newMatchCount, newWin, newBattering, newShootedGoal, newCollectedGoal){
    return this.playerRef.update(key, {matchCount: newMatchCount, win: newWin, battering: newBattering, shootedGoal: newShootedGoal, collectedGoal: newCollectedGoal});
  }

    removePlayer(id){ this.firebaseService.deletePlayer(id);
    }

    
    onScroll(event){
      // this.keyboard.close();
      }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerPage');
  }


}
