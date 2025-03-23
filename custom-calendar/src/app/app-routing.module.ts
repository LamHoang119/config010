import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'in-config',
    loadChildren: () =>
      import('./in-app/in-config/in-config.module').then(
        (m) => m.InConfigModule
      ),
  },
  { path: '', redirectTo: 'in-config', pathMatch: 'full' },
  { path: '**', redirectTo: 'in-config' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
