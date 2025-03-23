import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'in-config',
    loadChildren: () =>
      import('../app/in-app/in-config/shared/services/in-config.module').then(
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
