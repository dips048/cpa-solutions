import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesRoutingModule } from './guides-routing.module';
import { components } from './components';
import { SharedModule } from 'src/app/shared/shared.module';
import { LifeEventsHomeComponent } from './components/life-events/life-events-home/life-events-home.component';
import { GettingMarriedComponent } from './components/life-events/getting-married/getting-married.component';
import { GettingMarriedFGAComponent } from './components/life-events/components/getting-married-fg-a/getting-married-fg-a.component';
import { LifeInsuranceFGComponent } from './components/life-events/components/life-insurance-fg/life-insurance-fg.component';
import { GettingMarriedFAQAComponent } from './components/life-events/components/getting-married-faq-a/getting-married-faq-a.component';
import { LifeInsuranceFAQComponent } from './components/life-events/components/life-insurance-faq/life-insurance-faq.component';
import { HowMuchSpendingComponent } from './components/life-events/components/how-much-spending/how-much-spending.component';
import { BecomingParentComponent } from './components/life-events/becoming-parent/becoming-parent.component';
import { BecomingParentFGComponent } from './components/life-events/components/becoming-parent-fg/becoming-parent-fg.component';
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

@NgModule({
  declarations: [
    ...components,
    LifeEventsHomeComponent,
    GettingMarriedComponent,
    GettingMarriedFGAComponent,
    LifeInsuranceFGComponent,
    GettingMarriedFAQAComponent,
    LifeInsuranceFAQComponent,
    HowMuchSpendingComponent,
    BecomingParentComponent,
    BecomingParentFGComponent,
    NanyTaxRuleFGComponent,
    ChildEducationComponent,
    RaisingChildFAQComponent,
    NanyRulesFAQComponent,
    SavingForCollegeFAQComponent,
    PreparingForCollegeComponent,
    HigherEducationCostsComponent,
    HigherEducationFAQComponent,
    DevlopingFinancialPlanComponent,
    DevlopingFinancialPlanFGComponent,
    BudgetingFGComponent,
    DevlopingFinancialPlanFAQComponent,
    InvestmentOptionsFAQComponent,
    DealingWithBankComponent,
    BankAccountsFGComponent,
    ApplyingForLoanFGComponent,
    BankAccountsFAQComponent,
    ATMTransactionsFAQComponent,
    GettingLoanFAQComponent,
    LoanQuestionsFAQComponent,
    ImprovingCreditComponent,
    CreditCardsFGComponent,
    CreditReportsFGComponent,
    MerchantCCAbusesComponent,
    CreditCaredRightsComponent,
    FinancialTroublesFGComponent,
    CreditCardsFAQComponent,
    CreditReportsFAQComponent,
    FinancialTroublesFAQComponent,
    CreditRatingFAQComponent
  ],
  imports: [
    CommonModule,
    GuidesRoutingModule,
    SharedModule,
  ]
})
export class GuidesModule { }
