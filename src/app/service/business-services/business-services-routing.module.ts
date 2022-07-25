import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessServicesComponent } from './components/business-services/business-services.component';

const routes: Routes = [{ path: '', component: BusinessServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessServicesRoutingModule { }
