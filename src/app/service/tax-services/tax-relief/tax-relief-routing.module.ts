import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IRSAuditRepresentationComponent } from './components/irs-audit-representation/irs-audit-representation.component';
import { TaxReliefComponent } from './components/tax-relief/tax-relief.component';

const routes: Routes = [
  { path: '', component: TaxReliefComponent },
  { path: 'irs-audit-representation"', component: IRSAuditRepresentationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxReliefRoutingModule { }
