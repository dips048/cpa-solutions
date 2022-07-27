import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessStrategiesComponent } from './components/business-strategies/business-strategies.component';
import { FrequentlyAskedQuestionsComponent } from './components/frequently-asked-questions/frequently-asked-questions.component';
import { GuidesComponent } from './components/guides/guides.component';
import { InvestmentStrategiesComponent } from './components/investment-strategies/investment-strategies.component';
import { GettingMarriedFAQAComponent } from './components/life-events/components/getting-married-faq-a/getting-married-faq-a.component';
import { GettingMarriedFGAComponent } from './components/life-events/components/getting-married-fg-a/getting-married-fg-a.component';
import { LifeInsuranceFGComponent } from './components/life-events/components/life-insurance-fg/life-insurance-fg.component';
import { GettingMarriedComponent } from './components/life-events/getting-married/getting-married.component';
import { LifeEventsHomeComponent } from './components/life-events/life-events-home/life-events-home.component';
import { LifeEventsComponent } from './components/life-events/life-events/life-events.component';
import { LifeInsuranceFAQComponent } from './components/life-events/components/life-insurance-faq/life-insurance-faq.component';
import { TaxStrategiesBusinessOwnersComponent } from './components/tax-strategies-business-owners/tax-strategies-business-owners.component';
import { TaxStrategiesIndividualsComponent } from './components/tax-strategies-individuals/tax-strategies-individuals.component';
import { BecomingParentFGComponent } from './components/life-events/components/becoming-parent-fg/becoming-parent-fg.component';
import { BecomingParentComponent } from './components/life-events/becoming-parent/becoming-parent.component';
import { NanyTaxRuleFGComponent } from './components/life-events/components/nany-tax-rule-fg/nany-tax-rule-fg.component';
import { ChildEducationComponent } from './components/life-events/components/child-education/child-education.component';
import { RaisingChildFAQComponent } from './components/life-events/components/raising-child-faq/raising-child-faq.component';
import { NanyRulesFAQComponent } from './components/life-events/components/nany-rules-faq/nany-rules-faq.component';
import { SavingForCollegeFAQComponent } from './components/life-events/components/saving-for-college-faq/saving-for-college-faq.component';
import { PreparingForCollegeComponent } from './components/life-events/preparing-for-college/preparing-for-college.component';
import { HigherEducationCostsComponent } from './components/life-events/components/higher-education-costs/higher-education-costs.component';
import { HigherEducationFAQComponent } from './components/life-events/components/higher-education-faq/higher-education-faq.component';
import { DevlopingFinancialPlanComponent } from './components/life-events/devloping-financial-plan/devloping-financial-plan.component';
import { DevlopingFinancialPlanFGComponent } from './components/life-events/components/devloping-financial-plan-fg/devloping-financial-plan-fg.component';
import { BudgetingFGComponent } from './components/life-events/components/budgeting-fg/budgeting-fg.component';
import { DevlopingFinancialPlanFAQComponent } from './components/life-events/components/devloping-financial-plan-faq/devloping-financial-plan-faq.component';
import { InvestmentOptionsFAQComponent } from './components/life-events/components/investment-options-faq/investment-options-faq.component';
import { DealingWithBankComponent } from './components/life-events/dealing-with-bank/dealing-with-bank.component';
import { BankAccountsFGComponent } from './components/life-events/components/bank-accounts-fg/bank-accounts-fg.component';
import { ApplyingForLoanFGComponent } from './components/life-events/components/applying-for-loan-fg/applying-for-loan-fg.component';
import { BankAccountsFAQComponent } from './components/life-events/components/bank-accounts-faq/bank-accounts-faq.component';
import { ATMTransactionsFAQComponent } from './components/life-events/components/atm-transactions-faq/atm-transactions-faq.component';
import { GettingLoanFAQComponent } from './components/life-events/components/getting-loan-faq/getting-loan-faq.component';
import { LoanQuestionsFAQComponent } from './components/life-events/components/loan-questions-faq/loan-questions-faq.component';
import { ImprovingCreditComponent } from './components/life-events/improving-credit/improving-credit.component';
import { CreditCardsFGComponent } from './components/life-events/components/credit-cards-fg/credit-cards-fg.component';
import { CreditReportsFGComponent } from './components/life-events/components/credit-reports-fg/credit-reports-fg.component';
import { MerchantCCAbusesComponent } from './components/life-events/components/merchant-cc-abuses/merchant-cc-abuses.component';
import { CreditCaredRightsComponent } from './components/life-events/components/credit-cared-rights/credit-cared-rights.component';
import { FinancialTroublesFGComponent } from './components/life-events/components/financial-troubles-fg/financial-troubles-fg.component';
import { CreditCardsFAQComponent } from './components/life-events/components/credit-cards-faq/credit-cards-faq.component';
import { CreditReportsFAQComponent } from './components/life-events/components/credit-reports-faq/credit-reports-faq.component';
import { FinancialTroublesFAQComponent } from './components/life-events/components/financial-troubles-faq/financial-troubles-faq.component';
import { CreditRatingFAQComponent } from './components/life-events/components/credit-rating-faq/credit-rating-faq.component';
import { LawyersFGComponent } from './components/life-events/components/lawyers-fg/lawyers-fg.component';
import { ChoosingProfessionalComponent } from './components/life-events/choosing-professional/choosing-professional.component';
import { FinancialAdviceFGComponent } from './components/life-events/components/financial-advice-fg/financial-advice-fg.component';
import { ChoosingProfessionalFAQComponent } from './components/life-events/components/choosing-professional-faq/choosing-professional-faq.component';
import { BuyingInsuranceComponent } from './components/life-events/buying-insurance/buying-insurance.component';
import { HomeownersInsuranceFGComponent } from './components/life-events/components/homeowners-insurance-fg/homeowners-insurance-fg.component';
import { CarInsuranceFGComponent } from './components/life-events/components/car-insurance-fg/car-insurance-fg.component';
import { DisabilityInsuranceFGComponent } from './components/life-events/components/disability-insurance-fg/disability-insurance-fg.component';
import { DisabilityBenefitsFGComponent } from './components/life-events/components/disability-benefits-fg/disability-benefits-fg.component';
import { LongTermInsuranceFGComponent } from './components/life-events/components/long-term-insurance-fg/long-term-insurance-fg.component';
import { AnnuitiesFGComponent } from './components/life-events/components/annuities-fg/annuities-fg.component';
import { CareActFGComponent } from './components/life-events/components/care-act-fg/care-act-fg.component';
import { HomeownersInsuranceFAQComponent } from './components/life-events/components/homeowners-insurance-faq/homeowners-insurance-faq.component';
import { CarInsuranceFAQComponent } from './components/life-events/components/car-insurance-faq/car-insurance-faq.component';
import { DisabilityInsuranceFAQComponent } from './components/life-events/components/disability-insurance-faq/disability-insurance-faq.component';
import { LongTermInsuranceFAQComponent } from './components/life-events/components/long-term-insurance-faq/long-term-insurance-faq.component';
import { AnnuitiesFAQComponent } from './components/life-events/components/annuities-faq/annuities-faq.component';

const routes: Routes = [
  { path: '', component: GuidesComponent },
  {
    path: 'life-events',
    component: LifeEventsComponent,
    children: [
      { path: '', component: LifeEventsHomeComponent },
      { path: 'getting-married', component: GettingMarriedComponent },
      { path: 'getting-married-FG-A', component: GettingMarriedFGAComponent },
      { path: 'life-insurance-FG', component: LifeInsuranceFGComponent },
      { path: 'getting-married-FAQ-a', component: GettingMarriedFAQAComponent },
      { path: 'life-insurance-FAQ', component: LifeInsuranceFAQComponent },
      { path: 'becoming-parent', component: BecomingParentComponent },
      { path: 'becoming-parent-fg', component: BecomingParentFGComponent },
      { path: 'nany-tax-rule-fg', component: NanyTaxRuleFGComponent },
      { path: 'child-education', component: ChildEducationComponent },
      { path: 'raising-child-faq', component: RaisingChildFAQComponent },
      { path: 'nany-rules-faq', component: NanyRulesFAQComponent },
      { path: 'saving-for-college-faq', component: SavingForCollegeFAQComponent },
      { path: 'preparing-for-college', component: PreparingForCollegeComponent },
      { path: 'higher-education-costs', component: HigherEducationCostsComponent },
      { path: 'higher-education-faq', component: HigherEducationFAQComponent },
      { path: 'devloping-financial-plan', component: DevlopingFinancialPlanComponent },
      { path: 'devloping-financial-plan-fg', component: DevlopingFinancialPlanFGComponent },
      { path: 'budgeting-fg', component: BudgetingFGComponent },
      { path: 'devloping-financial-plan-faq', component: DevlopingFinancialPlanFAQComponent },
      { path: 'investment-options-faq', component: InvestmentOptionsFAQComponent },
      { path: 'dealing-with-bank', component: DealingWithBankComponent },
      { path: 'bank-accounts-fg', component: BankAccountsFGComponent },
      { path: 'applying-for-loan-fg', component: ApplyingForLoanFGComponent },
      { path: 'bank-accounts-faq', component: BankAccountsFAQComponent },
      { path: 'atm-transactions-faq', component: ATMTransactionsFAQComponent },
      { path: 'getting-loan-faq', component: GettingLoanFAQComponent },
      { path: 'loan-questions-faq', component: LoanQuestionsFAQComponent },
      { path: 'improving-credit', component: ImprovingCreditComponent },
      { path: 'credit-cards-fg', component: CreditCardsFGComponent },
      { path: 'credit-reports-fg', component: CreditReportsFGComponent },
      { path: 'merchant-cc-abuses', component: MerchantCCAbusesComponent },
      { path: 'credit-cared-rights', component: CreditCaredRightsComponent },
      { path: 'financial-troubles-fg', component: FinancialTroublesFGComponent },
      { path: 'credit-cards-faq', component: CreditCardsFAQComponent },
      { path: 'credit-reports-faq', component: CreditReportsFAQComponent },
      { path: 'financial-troubles-faq', component: FinancialTroublesFAQComponent },
      { path: 'credit-rating-faq', component: CreditRatingFAQComponent },
      { path: 'choosing-professional', component: ChoosingProfessionalComponent },
      { path: 'lawyers-fg', component: LawyersFGComponent },
      { path: 'financial-advice-fg', component: FinancialAdviceFGComponent },
      { path: 'choosing-professional-faq', component: ChoosingProfessionalFAQComponent },
      { path: 'buying-insurance', component: BuyingInsuranceComponent },
      { path: 'homeowners-insurance-fg', component: HomeownersInsuranceFGComponent },
      { path: 'car-insurance-fg', component: CarInsuranceFGComponent },
      { path: 'disability-insurance-fg', component: DisabilityInsuranceFGComponent },
      { path: 'disability-benefits-fg', component: DisabilityBenefitsFGComponent },
      { path: 'long-term-insurance-fg', component: LongTermInsuranceFGComponent },
      { path: 'annuities-fg', component: AnnuitiesFGComponent },
      { path: 'care-act-fg', component: CareActFGComponent },
      { path: 'homeowners-insurance-faq', component: HomeownersInsuranceFAQComponent },
      { path: 'car-insurance-faq', component: CarInsuranceFAQComponent },
      { path: 'disability-insurance-faq', component: DisabilityInsuranceFAQComponent },
      { path: 'long-term-insurance-faq', component: LongTermInsuranceFAQComponent },
      { path: 'annuities-faq', component: AnnuitiesFAQComponent },
      { path: '', component: LifeEventsHomeComponent },
      { path: '', component: LifeEventsHomeComponent },
    ]
  },
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
