import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InConfigComponent } from './in-config.component';
import { Config009Component } from '../../pages/config009/config009.component';

const routes: Routes = [
  {
    path: '',
    component: InConfigComponent,
    children: [
      {
        path: '',
        redirectTo: 'app-config009',
        pathMatch: 'full',
      },
      {
        path: 'app-config009',
        component: Config009Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PConfigRoutingModule {}
