import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'drugs',
        children: [
          {
            path: '',
            component: HomePage,
          },
          {
            path: 'drug/:id',
            loadChildren: () =>
              import('../drug-details/drug-details.module').then(
                (m) => m.DrugDetailsPageModule
              ),
          },
        ],
      },
      {
        path: 'interactions',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./interactions/interactions.module').then(
                (m) => m.InteractionsPageModule
              ),
          },
        ],
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./settings/settings.module').then(
                (m) => m.SettingsPageModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/app/tabs/drugs',
    pathMatch: 'full',
  },
  {
    path: 'interactions',
    loadChildren: () =>
      import('./interactions/interactions.module').then(
        (m) => m.InteractionsPageModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
