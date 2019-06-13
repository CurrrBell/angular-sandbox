import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadMeComponent } from './read-me/read-me.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'read-me', component: ReadMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
