import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxCenterRoutingModule } from './tax-center-routing.module';
import { components } from './components';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    TaxCenterRoutingModule,
    MatButtonModule,
  ]
})
export class TaxCenterModule { }
