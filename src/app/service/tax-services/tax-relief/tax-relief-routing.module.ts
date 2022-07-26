import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackTaxesOwedComponent } from './components/back-taxes-owed/back-taxes-owed.component';
import { BankruptcyComponent } from './components/bankruptcy/bankruptcy.component';
import { GetYourIRSFileComponent } from './components/get-your-irs-file/get-your-irs-file.component';
import { InnocentSpouseReliefComponent } from './components/innocent-spouse-relief/innocent-spouse-relief.component';
import { IRSAuditRepresentationComponent } from './components/irs-audit-representation/irs-audit-representation.component';
import { IRSLeviesComponent } from './components/irs-levies/irs-levies.component';
import { IRSLiensComponent } from './components/irs-liens/irs-liens.component';
import { IRSPaymentPlanComponent } from './components/irs-payment-plan/irs-payment-plan.component';
import { IRSSeizuresComponent } from './components/irs-seizures/irs-seizures.component';
import { IRSWageGarnishmentComponent } from './components/irs-wage-garnishment/irs-wage-garnishment.component';
import { NonFiledTaxReturnsComponent } from './components/non-filed-tax-returns/non-filed-tax-returns.component';
import { OfferInCompromiseComponent } from './components/offer-in-compromise/offer-in-compromise.component';
import { PayrollTaxProblemsComponent } from './components/payroll-tax-problems/payroll-tax-problems.component';
import { TaxReliefComponent } from './components/tax-relief/tax-relief.component';

const routes: Routes = [
  { path: '', component: TaxReliefComponent },
  { path: 'irs-audit-representation', component: IRSAuditRepresentationComponent },
  { path: 'non-filed-tax-returns', component: NonFiledTaxReturnsComponent },
  { path: 'back-taxes-owed', component: BackTaxesOwedComponent },
  { path: 'payroll-tax-problems', component: PayrollTaxProblemsComponent },
  { path: 'IRS-liens', component: IRSLiensComponent },
  { path: 'IRS-levies', component: IRSLeviesComponent },
  { path: 'IRS-wage-garnishment', component: IRSWageGarnishmentComponent },
  { path: 'IRS-seizures', component: IRSSeizuresComponent },
  { path: 'IRS-payment-plan', component: IRSPaymentPlanComponent },
  { path: 'offer-in-compromise', component: OfferInCompromiseComponent },
  { path: 'bankruptcy', component: BankruptcyComponent },
  { path: 'innocent-spouse-relief', component: InnocentSpouseReliefComponent },
  { path: 'get-your-IRS-file', component: GetYourIRSFileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxReliefRoutingModule { }
