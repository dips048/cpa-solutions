import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstateTrustTaxServicesComponent } from './components/estate-trust-tax-services/estate-trust-tax-services.component';
import { IndividualTaxPreparationComponent } from './components/individual-tax-preparation/individual-tax-preparation.component';
import { TaxPlanningComponent } from './components/tax-planning/tax-planning.component';
import { TaxPreparationForBusinessComponent } from './components/tax-preparation-for-business/tax-preparation-for-business.component';
import { TaxServicesComponent } from './components/tax-services/tax-services.component';

const routes: Routes = [
  { path: '', component: TaxServicesComponent },
  { path: 'individual-tax-preparation', component: IndividualTaxPreparationComponent },
  { path: 'tax-preparation-for-business', component: TaxPreparationForBusinessComponent },
  { path: 'tax-planning', component: TaxPlanningComponent },
  { path: 'estate-trust-tax-services', component: EstateTrustTaxServicesComponent },
  { path: 'tax-relief', loadChildren: () => import('./tax-relief/tax-relief.module').then(m => m.TaxReliefModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxServicesRoutingModule { }
