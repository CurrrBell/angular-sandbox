import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiExamplesRoutingModule } from './ui-examples-routing.module';
import { UiExamplesComponent } from './ui-examples.component';

@NgModule({
  declarations: [ UiExamplesComponent],
  imports: [
    CommonModule,
    UiExamplesRoutingModule
  ]
})
export class UiExamplesModule { }
