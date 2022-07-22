import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { components } from './components';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    MatButtonModule,
    SharedModule
  ]
})
export class ResourcesModule { }
