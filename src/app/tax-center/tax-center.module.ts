import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxCenterRoutingModule } from './tax-center-routing.module';
import { components } from './components';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    TaxCenterRoutingModule
  ]
})
export class TaxCenterModule { }
