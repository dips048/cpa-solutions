import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxCenterRoutingModule } from './tax-center-routing.module';
import { components } from './components';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    TaxCenterRoutingModule,
    MatButtonModule,
    SharedModule
  ]
})
export class TaxCenterModule { }
