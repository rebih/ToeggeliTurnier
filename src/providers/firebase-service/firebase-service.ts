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

  playerRef: AngularFireList<any>;
  player: Observable<any[]>;

  constructor(public afd: AngularFireDatabase) {
    this.playerRef = this.afd.list('/weneedItems/');
    this.player = this.playerRef.snapshotChanges().map(changes => {
    return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })); });
    }

    getPlayers(){
      return this.player;
    }
      addPlayer(newName) {
      return this.playerRef.push({ value: newName, isDone: false });
      }
      updatePlayer(key, newText) {
      return this.playerRef.update(key, { value: newText }); }
      //sets an item to done or undone
      donePlayer(key, status) {
      return this.playerRef.update(key, { isDone: status });
    }
      deletePlayer(key) {
        this.playerRef.remove(key)
      };
      

}
