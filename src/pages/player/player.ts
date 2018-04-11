import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { Observable } from 'rxjs/Observable';


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

  needPlayers: Observable<any[]>;
  newPlayer: any = '';

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public firebaseSerice: FirebaseServiceProvider) {
    this.needPlayers = this.firebaseSerice.getPlayers();
  }

  addPlayer(){
    if(this.newPlayer.length == 0 || !this.newPlayer.trim()){
      console.log("empty");
    }else{
      this.firebaseSerice.addPlayer(this.newPlayer).then(()=>{
        this.newPlayer = "";
        this.content.scrollToBottom();
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerPage');
  }

}
