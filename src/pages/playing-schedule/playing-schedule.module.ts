import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayingSchedulePage } from './playing-schedule';

@NgModule({
  declarations: [
    PlayingSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(PlayingSchedulePage),
  ],
})
export class PlayingSchedulePageModule {}
