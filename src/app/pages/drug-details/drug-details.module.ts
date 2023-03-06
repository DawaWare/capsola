import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrugDetailsPageRoutingModule } from './drug-details-routing.module';

import { DrugDetailsPage } from './drug-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrugDetailsPageRoutingModule
  ],
  declarations: [DrugDetailsPage]
})
export class DrugDetailsPageModule {}
