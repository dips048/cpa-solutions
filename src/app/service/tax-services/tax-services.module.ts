import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxServicesRoutingModule } from './tax-services-routing.module';
import { components } from './components';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    TaxServicesRoutingModule,
    SharedModule,
    MatButtonModule,
  ]
})
export class TaxServicesModule { }
