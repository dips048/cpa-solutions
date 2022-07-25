import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessServicesComponent } from './components/business-services/business-services.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ServiceComponent } from './components/service/service.component';
import { ServicesForQuickBooksComponent } from './components/services-for-quick-books/services-for-quick-books.component';
import { TaxServicesComponent } from './components/tax-services/tax-services.component';

const routes: Routes = [
  { path: '', component: ServiceComponent },
  { path: 'business-services', component: BusinessServicesComponent },
  { path: 'tax-services', component: TaxServicesComponent },
  { path: 'services-for-quick-books', component: ServicesForQuickBooksComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'services-for-individuals', loadChildren: () => import('./services-for-individuals/services-for-individuals.module').then(m => m.ServicesForIndividualsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
