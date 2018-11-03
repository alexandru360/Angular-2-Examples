import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TranslateSomethingComponent} from './translate-example/translate-something/translate-something.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'}
  , {path: '**', redirectTo: 'home-dashboard'}
  , {path: 'translate-example', component: TranslateSomethingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
