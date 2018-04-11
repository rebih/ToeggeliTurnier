import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class FirebaseServiceProvider {

  playersRef: AngularFireList<any>;
  players: Observable<any[]>;

  constructor(public afd: AngularFireDatabase) {
   this.playersRef = this.afd.list('/toeggeliPlayers/');
   this.players = this.playersRef.snapshotChanges().map(changes => {
     return changes.map(c=>({key: c.payload.key, ...c.payload.val()}));
   });

  }
  getPlayers(){
    return this.players;
   }

  addPlayer(newName){
    return this.playersRef.push({value: newName, isDone: false});
  }

}
