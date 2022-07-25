import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessServicesRoutingModule } from './business-services-routing.module';
import { components } from './components';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    BusinessServicesRoutingModule,
    SharedModule,
  ]
})
export class BusinessServicesModule { }
