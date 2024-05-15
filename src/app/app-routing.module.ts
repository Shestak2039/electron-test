import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'mailing',
    loadChildren: () => import('./modules/mailing/mailing.module').then(m => m.MailingModule),
  },
  {
    path: '',
    redirectTo: 'mailing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
