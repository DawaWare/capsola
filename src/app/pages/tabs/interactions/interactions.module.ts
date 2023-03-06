import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteractionsPageRoutingModule } from './interactions-routing.module';

import { InteractionsPage } from './interactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteractionsPageRoutingModule
  ],
  declarations: [InteractionsPage]
})
export class InteractionsPageModule {}
