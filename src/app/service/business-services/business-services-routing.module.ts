import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditsReviewsCompilationsComponent } from './components/audits-reviews-compilations/audits-reviews-compilations.component';
import { BankFinancingComponent } from './components/bank-financing/bank-financing.component';
import { BookKeepingServicesComponent } from './components/book-keeping-services/book-keeping-services.component';
import { BusinessAdvisoryServicesComponent } from './components/business-advisory-services/business-advisory-services.component';
import { BusinessServicesComponent } from './components/business-services/business-services.component';
import { BusinessValuationComponent } from './components/business-valuation/business-valuation.component';
import { CashFlowManagementComponent } from './components/cash-flow-management/cash-flow-management.component';
import { FinancialPlanningForBusinessesComponent } from './components/financial-planning-for-businesses/financial-planning-for-businesses.component';
import { ForensicAccountingComponent } from './components/forensic-accounting/forensic-accounting.component';
import { InternalControlsComponent } from './components/internal-controls/internal-controls.component';
import { LitigationSupportComponent } from './components/litigation-support/litigation-support.component';
import { NewBusinessFormationComponent } from './components/new-business-formation/new-business-formation.component';
import { NonProfitOrganizationsComponent } from './components/non-profit-organizations/non-profit-organizations.component';
import { PartTimeCFOServicesComponent } from './components/part-time-cfo-services/part-time-cfo-services.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { SmallBusinessAccountingComponent } from './components/small-business-accounting/small-business-accounting.component';
import { SuccessionPlanningComponent } from './components/succession-planning/succession-planning.component';

const routes: Routes = [
  { path: '', component: BusinessServicesComponent },
  { path: 'small-business-accounting', component: SmallBusinessAccountingComponent },
  { path: 'book-keeping-services', component: BookKeepingServicesComponent },
  { path: 'payroll', component: PayrollComponent },
  { path: 'part-time-CFO-services', component: PartTimeCFOServicesComponent },
  { path: 'audits-reviews-compilations', component: AuditsReviewsCompilationsComponent },
  { path: 'forensic-accounting', component: ForensicAccountingComponent },
  { path: 'cash-flow-management', component: CashFlowManagementComponent },
  { path: 'bank-financing', component: BankFinancingComponent },
  { path: 'business-valuation', component: BusinessValuationComponent },
  { path: 'business-advisory-services', component: BusinessAdvisoryServicesComponent },
  { path: 'financial-planning-for-businesses', component: FinancialPlanningForBusinessesComponent },
  { path: 'succession-planning', component: SuccessionPlanningComponent },
  { path: 'new-business-formation', component: NewBusinessFormationComponent },
  { path: 'non-profit-organizations', component: NonProfitOrganizationsComponent },
  { path: 'internal-controls', component: InternalControlsComponent },
  { path: 'litigation-support', component: LitigationSupportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessServicesRoutingModule { }
