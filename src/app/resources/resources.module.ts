import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { components } from './components';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { ClientPortalComponent } from './components/client-portal/client-portal.component';
import { InternetLinksComponent } from './components/internet-links/internet-links.component';


@NgModule({
  declarations: [
    ...components,
    ClientPortalComponent,
    InternetLinksComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    MatButtonModule,
    SharedModule
  ]
})
export class ResourcesModule { }
