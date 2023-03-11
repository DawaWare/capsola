import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialPageRoutingModule } from './tutorial-routing.module';

import { TutorialPage } from './tutorial.page';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialPageRoutingModule,
    SwiperModule
  ],
  declarations: [TutorialPage]
})
export class TutorialPageModule {}
