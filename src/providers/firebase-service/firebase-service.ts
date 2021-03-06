import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

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
    this.playerRef = this.afd.list('/Players/');
    this.player = this.playerRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getPlayers() {
    return this.player;
  }

  addPlayer(newName) {
    return this.playerRef.push({
      name: newName,
      matchCount: 0,
      win: 0,
      battering: 0,
      shootedGoal: 0,
      collectedGoal: 0
    });
  }

  updatePlayer(key, newMatchCount, newWin, newBattering, newShootedGoal, newCollectedGoal) {
    return this.playerRef.update(
      key, {
        matchCount: newMatchCount,
        win: newWin,
        battering: newBattering,
        shootedGoal: newShootedGoal,
        collectedGoal: newCollectedGoal
      });
  }

  deletePlayer(key) {
    this.playerRef.remove(key)
  };
}
