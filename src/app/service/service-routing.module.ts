import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessServicesComponent } from './components/business-services/business-services.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ServiceForIndividualsComponent } from './components/service-for-individuals/service-for-individuals.component';
import { ServiceComponent } from './components/service/service.component';
import { ServicesForQuickBooksComponent } from './components/services-for-quick-books/services-for-quick-books.component';
import { TaxServicesComponent } from './components/tax-services/tax-services.component';

const routes: Routes = [
  { path: '', component: ServiceComponent },
  { path: 'services-for-individuals', component: ServiceForIndividualsComponent },
  { path: 'business-services', component: BusinessServicesComponent },
  { path: 'tax-services', component: TaxServicesComponent },
  { path: 'services-for-quick-books', component: ServicesForQuickBooksComponent },
  { path: 'industries', component: IndustriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
