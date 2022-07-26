import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service.component';

const routes: Routes = [
  { path: '', component: ServiceComponent },
  { path: 'services-for-individuals', loadChildren: () => import('./services-for-individuals/services-for-individuals.module').then(m => m.ServicesForIndividualsModule) },
  { path: 'business-services', loadChildren: () => import('./business-services/business-services.module').then(m => m.BusinessServicesModule) },
  { path: 'tax-services', loadChildren: () => import('./tax-services/tax-services.module').then(m => m.TaxServicesModule) },
  { path: 'services-for-quick-books', loadChildren: () => import('./services-for-quick-books/services-for-quick-books.module').then(m => m.ServicesForQuickBooksModule) },
  { path: 'industries', loadChildren: () => import('./industries/industries.module').then(m => m.IndustriesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
