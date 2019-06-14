import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiExamplesComponent } from './ui-examples.component';

const routes: Routes = [
  { path: '', component: UiExamplesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiExamplesRoutingModule { }
