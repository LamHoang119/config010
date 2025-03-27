import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InConfigComponent } from './in-config.component';
import { Config009Component } from './pages/config009/config009.component';
import { Config010Component } from './pages/config010/config010.component';
import { Config011Component } from './pages/config011/config011.component';
const routes: Routes = [
  {
    path: '',
    component: InConfigComponent,
    children: [
      {
        path: '',
        redirectTo: 'app-config011',
        pathMatch: 'full',
      },
      {
        path: 'app-config009',
        component: Config009Component,
      },
      {
        path: 'app-config010',
        component: Config010Component,
      },
      {
        path: 'app-config011',
        component: Config011Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PConfigRoutingModule {}
