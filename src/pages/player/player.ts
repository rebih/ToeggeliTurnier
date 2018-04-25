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

itemsRef: AngularFireList<any>;
items: Observable<any[]>;

needItems: Observable<any[]>;
newItem: any = '';

@ViewChild(Content) content: Content;

constructor(public afd: AngularFireDatabase, public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
  this.needItems = this.firebaseService.getItems();
  this.itemsRef = this.afd.list('/weneedItems/');
  this.items = this.itemsRef.snapshotChanges().map(changes => {
    return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  });
}

addItem(){
  if(this.newItem.length === 0 || !this.newItem.trim()){
  console.log("empty"); }else{
  this.firebaseService.addItem(this.newItem).then(()=>{
  this.newItem = "";
  // this.keyboard.close();
  this.content.scrollToBottom();
  }); }
  }

    removeItem(id){ this.firebaseService.deleteItem(id);
    }

    doneItem(key, status){ this.firebaseService.doneItem(key, status);
    }
    
    onScroll(event){
      // this.keyboard.close();
      }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerPage');
  }


}
