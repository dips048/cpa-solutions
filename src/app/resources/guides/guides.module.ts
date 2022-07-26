import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesRoutingModule } from './guides-routing.module';
import { components } from './components';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    GuidesRoutingModule,
    SharedModule,
  ]
})
export class GuidesModule { }
