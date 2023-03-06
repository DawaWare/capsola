import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteractionsPage } from './interactions.page';

const routes: Routes = [
  {
    path: '',
    component: InteractionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteractionsPageRoutingModule {}
