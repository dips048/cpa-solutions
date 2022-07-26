import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessStrategiesComponent } from './components/business-strategies/business-strategies.component';
import { FrequentlyAskedQuestionsComponent } from './components/frequently-asked-questions/frequently-asked-questions.component';
import { GuidesComponent } from './components/guides/guides.component';
import { InvestmentStrategiesComponent } from './components/investment-strategies/investment-strategies.component';
import { LifeEventsComponent } from './components/life-events/life-events.component';
import { TaxStrategiesBusinessOwnersComponent } from './components/tax-strategies-business-owners/tax-strategies-business-owners.component';
import { TaxStrategiesIndividualsComponent } from './components/tax-strategies-individuals/tax-strategies-individuals.component';

const routes: Routes = [
  { path: '', component: GuidesComponent },
  { path: 'life-events', component: LifeEventsComponent },
  { path: 'business-strategies', component: BusinessStrategiesComponent },
  { path: 'investment-strategies', component: InvestmentStrategiesComponent },
  { path: 'tax-strategies-business-owners', component: TaxStrategiesBusinessOwnersComponent },
  { path: 'tax-strategies-individuals', component: TaxStrategiesIndividualsComponent },
  { path: 'frequently-asked-questions', component: FrequentlyAskedQuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule { }
