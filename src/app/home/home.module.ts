import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReadMeComponent } from '../read-me/read-me.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ReadMeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ReadMeComponent
  ]
})
export class HomeModule { }
