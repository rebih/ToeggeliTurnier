import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TournamentPage } from './tournament';

@NgModule({
  declarations: [
    TournamentPage,
  ],
  imports: [
    IonicPageModule.forChild(TournamentPage),
  ],
})
export class TournamentPageModule {}
