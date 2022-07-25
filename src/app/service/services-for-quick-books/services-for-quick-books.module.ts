import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesForQuickBooksRoutingModule } from './services-for-quick-books-routing.module';
import { components } from './components';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ServicesForQuickBooksRoutingModule,
    SharedModule,
    MatButtonModule,
  ]
})
export class ServicesForQuickBooksModule { }
