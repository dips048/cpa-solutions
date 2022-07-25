import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BusinessServicesComponent } from './components/business-services/business-services.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ServiceComponent } from './components/service/service.component';
import { ServicesForQuickBooksComponent } from './components/services-for-quick-books/services-for-quick-books.component';

const routes: Routes = [
  { path: '', component: ServiceComponent },
  { path: 'services-for-quick-books', component: ServicesForQuickBooksComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'services-for-individuals', loadChildren: () => import('./services-for-individuals/services-for-individuals.module').then(m => m.ServicesForIndividualsModule) },
  { path: 'business-services', loadChildren: () => import('./business-services/business-services.module').then(m => m.BusinessServicesModule) },
  { path: 'tax-services', loadChildren: () => import('./tax-services/tax-services.module').then(m => m.TaxServicesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
