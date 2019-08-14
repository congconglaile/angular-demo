import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardSetComponent } from './card/card-set.component';
import { ResultComponent } from './card/result.component';

const routes: Routes = [
  {
    path: '',
    component: CardSetComponent,
    children: []
  },
  {
    path: 'result',
    component: ResultComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
