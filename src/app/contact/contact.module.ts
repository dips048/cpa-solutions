import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { components } from './components';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatButtonModule
  ]
})
export class ContactModule { }
