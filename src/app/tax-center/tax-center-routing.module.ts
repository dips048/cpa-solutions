import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IrsTaxFormsPublicationsComponent } from './components/irs-tax-forms-publications/irs-tax-forms-publications.component';
import { RecordRetentionGuideComponent } from './components/record-retention-guide/record-retention-guide.component';
import { StateTaxFormsComponent } from './components/state-tax-forms/state-tax-forms.component';
import { TaxCenterComponent } from './components/tax-center/tax-center.component';
import { TaxDueDatesComponent } from './components/tax-due-dates/tax-due-dates.component';
import { TaxRatesComponent } from './components/tax-rates/tax-rates.component';
import { TrackYourRefundComponent } from './components/track-your-refund/track-your-refund.component';

const routes: Routes = [
  { path: '', component: TaxCenterComponent },
  { path: 'track-your-refund', component: TrackYourRefundComponent },
  { path: 'tax-due-dates', component: TaxDueDatesComponent },
  { path: 'tax-rates', component: TaxRatesComponent },
  { path: 'irs-tax-forms-publications', component: IrsTaxFormsPublicationsComponent },
  { path: 'record-retention-guide', component: RecordRetentionGuideComponent },
  { path: 'state-tax-forms', component: StateTaxFormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxCenterRoutingModule { }
