import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { components } from './components';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatButtonModule,
    SharedModule
  ]
})
export class AboutModule { }
