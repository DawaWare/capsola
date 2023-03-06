import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrugDetailsPage } from './drug-details.page';

const routes: Routes = [
  {
    path: '',
    component: DrugDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrugDetailsPageRoutingModule {}
