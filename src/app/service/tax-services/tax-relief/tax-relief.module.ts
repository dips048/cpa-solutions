import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxReliefRoutingModule } from './tax-relief-routing.module';
import { components } from './components';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    TaxReliefRoutingModule,
    SharedModule,
    MatButtonModule,
  ]
})
export class TaxReliefModule { }
