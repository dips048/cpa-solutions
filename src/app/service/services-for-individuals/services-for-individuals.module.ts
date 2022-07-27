import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesForIndividualsRoutingModule } from './services-for-individuals-routing.module';
import { components } from './components';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ServicesForIndividualsRoutingModule,
    MatButtonModule,
    SharedModule,
  ]
})
export class ServicesForIndividualsModule { }
