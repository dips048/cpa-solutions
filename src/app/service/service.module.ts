import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { components } from './components';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MatButtonModule
  ]
})
export class ServiceModule { }
