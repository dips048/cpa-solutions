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
import { GettingLoanComponent } from './components/life-events/getting-loan/getting-loan.component';
import { MortgageAlternativesFGComponent } from './components/life-events/components/mortgage-alternatives-fg/mortgage-alternatives-fg.component';
import { RefinancingMortgageFGComponent } from './components/life-events/components/refinancing-mortgage-fg/refinancing-mortgage-fg.component';
import { HomeEquityLoansFGComponent } from './components/life-events/components/home-equity-loans-fg/home-equity-loans-fg.component';
import { MortgageLockInsFgComponent } from './components/life-events/components/mortgage-lock-ins-fg/mortgage-lock-ins-fg.component';
import { FinancingQuestionsFAQComponent } from './components/life-events/components/financing-questions-faq/financing-questions-faq.component';
import { RetirementPlanFGComponent } from './components/life-events/components/retirement-plan-fg/retirement-plan-fg.component';
import { PlanningForRetirementComponent } from './components/life-events/planning-for-retirement/planning-for-retirement.component';
import { RetirementTipsFGComponent } from './components/life-events/components/retirement-tips-fg/retirement-tips-fg.component';
import { SocialSecurityFGComponent } from './components/life-events/components/social-security-fg/social-security-fg.component';
import { SocialSecurityBenefitsFGComponent } from './components/life-events/components/social-security-benefits-fg/social-security-benefits-fg.component';
import { RetirementDistributionFGWhenComponent } from './components/life-events/components/retirement-distribution-fg-when/retirement-distribution-fg-when.component';
import { RetirementDistributionFGHowComponent } from './components/life-events/components/retirement-distribution-fg-how/retirement-distribution-fg-how.component';
import { RothIRAsFGComponent } from './components/life-events/components/roth-iras-fg/roth-iras-fg.component';
import { SimplePlanFGComponent } from './components/life-events/components/simple-plan-fg/simple-plan-fg.component';
import { SocialSecurityBenefitsFAQComponent } from './components/life-events/components/social-security-benefits-faq/social-security-benefits-faq.component';
import { RetirementAssetsFAQComponent } from './components/life-events/components/retirement-assets-faq/retirement-assets-faq.component';
import { IRAsFAQComponent } from './components/life-events/components/iras-faq/iras-faq.component';
import { TraditionalVsRothIRAsFAQComponent } from './components/life-events/components/traditional-vs-roth-iras-faq/traditional-vs-roth-iras-faq.component';
import { BuyingCarComponent } from './components/life-events/buying-car/buying-car.component';
import { NextCarFGComponent } from './components/life-events/components/next-car-fg/next-car-fg.component';
import { NextCarFAQComponent } from './components/life-events/components/next-car-faq/next-car-faq.component';
import { SellingHomeComponent } from './components/life-events/selling-home/selling-home.component';
import { BuyingHomeFGComponent } from './components/life-events/components/buying-home-fg/buying-home-fg.component';
import { HomeMortgageFGComponent } from './components/life-events/components/home-mortgage-fg/home-mortgage-fg.component';
import { DeductibilityPointsFGComponent } from './components/life-events/components/deductibility-points-fg/deductibility-points-fg.component';
import { SellingHomeFGAComponent } from './components/life-events/components/selling-home-fg-a/selling-home-fg-a.component';
import { SellingHomeFGBComponent } from './components/life-events/components/selling-home-fg-b/selling-home-fg-b.component';
import { DeductibleExpensesFGComponent } from './components/life-events/components/deductible-expenses-fg/deductible-expenses-fg.component';
import { RealEstateDeductionFGComponent } from './components/life-events/components/real-estate-deduction-fg/real-estate-deduction-fg.component';
import { MortgagesFAQComponent } from './components/life-events/components/mortgages-faq/mortgages-faq.component';
import { SellingHomeFAQComponent } from './components/life-events/components/selling-home-faq/selling-home-faq.component';
import { PlanningMoveFAQComponent } from './components/life-events/components/planning-move-faq/planning-move-faq.component';
import { EstatePlanningComponent } from './components/life-events/estate-planning/estate-planning.component';
import { PostmortemLetterFGComponent } from './components/life-events/components/postmortem-letter-fg/postmortem-letter-fg.component';
import { EstatePlanningFGComponent } from './components/life-events/components/estate-planning-fg/estate-planning-fg.component';
import { LivingTrustFAQComponent } from './components/life-events/components/living-trust-faq/living-trust-faq.component';
import { WillsFAQComponent } from './components/life-events/components/wills-faq/wills-faq.component';
import { EstateTaxesFAQComponent } from './components/life-events/components/estate-taxes-faq/estate-taxes-faq.component';
import { CharitableContributionComponent } from './components/life-events/charitable-contribution/charitable-contribution.component';
import { CharitableContributionsFGComponent } from './components/life-events/components/charitable-contributions-fg/charitable-contributions-fg.component';
import { CharitableContributionsPropertyFGComponent } from './components/life-events/components/charitable-contributions-property-fg/charitable-contributions-property-fg.component';
import { CharitableContributionsRecordsFGComponent } from './components/life-events/components/charitable-contributions-records-fg/charitable-contributions-records-fg.component';
import { AdvancedCharityTechniquesFGComponent } from './components/life-events/components/advanced-charity-techniques-fg/advanced-charity-techniques-fg.component';
import { FraudulentCharitiesFGComponent } from './components/life-events/components/fraudulent-charities-fg/fraudulent-charities-fg.component';
import { CharitableContributionsFAQComponent } from './components/life-events/components/charitable-contributions-faq/charitable-contributions-faq.component';
import { CharitableDeductionsFAQComponent } from './components/life-events/components/charitable-deductions-faq/charitable-deductions-faq.component';
import { AvoidingScamsComponent } from './components/life-events/avoiding-scams/avoiding-scams.component';
import { ConArtistsFGComponent } from './components/life-events/components/con-artists-fg/con-artists-fg.component';
import { AvoidingScamsFAQComponent } from './components/life-events/components/avoiding-scams-faq/avoiding-scams-faq.component';
import { GettingDivorceComponent } from './components/life-events/getting-divorce/getting-divorce.component';
import { MajorIllnessComponent } from './components/life-events/major-illness/major-illness.component';
import { DeathOfLovedOnesComponent } from './components/life-events/death-of-loved-ones/death-of-loved-ones.component';
import { ImprovingRetirementComponent } from './components/life-events/improving-retirement/improving-retirement.component';
import { HandlingSituationsComponent } from './components/life-events/handling-situations/handling-situations.component';
import { GettingDivorcedFAQComponent } from './components/life-events/components/getting-divorced-faq/getting-divorced-faq.component';
import { DeathOfSpouseFGComponent } from './components/life-events/components/death-of-spouse-fg/death-of-spouse-fg.component';
import { FuneralsFGComponent } from './components/life-events/components/funerals-fg/funerals-fg.component';
import { DeathOfLovedOneFAQComponent } from './components/life-events/components/death-of-loved-one-faq/death-of-loved-one-faq.component';
import { RetirementMoneyFGComponent } from './components/life-events/components/retirement-money-fg/retirement-money-fg.component';
import { ReverseMotgagesFGComponent } from './components/life-events/components/reverse-motgages-fg/reverse-motgages-fg.component';
import { PensionFGComponent } from './components/life-events/components/pension-fg/pension-fg.component';
import { SurvivorsBenefitsFGComponent } from './components/life-events/components/survivors-benefits-fg/survivors-benefits-fg.component';
import { OtherSituationFAQComponent } from './components/life-events/components/other-situation-faq/other-situation-faq.component';
import { DocumnentLocatorSystemFGComponent } from './components/life-events/components/documnent-locator-system-fg/documnent-locator-system-fg.component';
import { RecordingGuideFGComponent } from './components/life-events/components/recording-guide-fg/recording-guide-fg.component';
import { SavingMoneyFGComponent } from './components/life-events/components/saving-money-fg/saving-money-fg.component';

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
      { path: 'getting-loan', component: GettingLoanComponent },
      { path: 'mortgage-alternatives-fg', component: MortgageAlternativesFGComponent },
      { path: 'refinancing-mortgage-fg', component: RefinancingMortgageFGComponent },
      { path: 'home-equity-loans-fg', component: HomeEquityLoansFGComponent },
      { path: 'mortgage-alternatives-fg', component: MortgageLockInsFgComponent },
      { path: 'financing-questions-faq', component: FinancingQuestionsFAQComponent },
      { path: 'planning-for-retirement', component: PlanningForRetirementComponent },
      { path: 'retirement-plan-fg', component: RetirementPlanFGComponent },
      { path: 'retirement-tips-fg', component: RetirementTipsFGComponent },
      { path: 'social-security-fg', component: SocialSecurityFGComponent },
      { path: 'social-security-benefits-fg', component: SocialSecurityBenefitsFGComponent },
      { path: 'retirement-distribution-fg-when', component: RetirementDistributionFGWhenComponent },
      { path: 'retirement-distribution-fg-how', component: RetirementDistributionFGHowComponent },
      { path: 'roth-iras-fg', component: RothIRAsFGComponent },
      { path: 'simple-plan-fg', component: SimplePlanFGComponent },
      { path: 'social-security-benefits-faq', component: SocialSecurityBenefitsFAQComponent },
      { path: 'retirement-assets-faq', component: RetirementAssetsFAQComponent },
      { path: 'iras-faq', component: IRAsFAQComponent },
      { path: 'traditional-vs-roth-iras-faq', component: TraditionalVsRothIRAsFAQComponent },
      { path: 'buying-car', component: BuyingCarComponent },
      { path: 'next-car-fg', component: NextCarFGComponent },
      { path: 'next-car-faq', component: NextCarFAQComponent },
      { path: 'selling-home', component: SellingHomeComponent },
      { path: 'buying-home-fg', component: BuyingHomeFGComponent },
      { path: 'home-mortgage-fg', component: HomeMortgageFGComponent },
      { path: 'deductibility-points-fg', component: DeductibilityPointsFGComponent },
      { path: 'selling-home-fg-a', component: SellingHomeFGAComponent },
      { path: 'selling-home-fg-b', component: SellingHomeFGBComponent },
      { path: 'deductible-expenses-fg', component: DeductibleExpensesFGComponent },
      { path: 'real-estate-deduction-fg', component: RealEstateDeductionFGComponent },
      { path: 'mortgages-faq', component: MortgagesFAQComponent },
      { path: 'selling-home-faq', component: SellingHomeFAQComponent },
      { path: 'planning-move-faq', component: PlanningMoveFAQComponent },
      { path: 'estate-planning', component: EstatePlanningComponent },
      { path: 'estate-planning-fg', component: EstatePlanningFGComponent },
      { path: 'postmortem-letter-fg', component: PostmortemLetterFGComponent },
      { path: 'living-trust-faq', component: LivingTrustFAQComponent },
      { path: 'wills-faq', component: WillsFAQComponent },
      { path: 'estate-taxes-faq', component: EstateTaxesFAQComponent },
      { path: 'charitable-contributions', component: CharitableContributionComponent },
      { path: 'charitable-contributions-fg', component: CharitableContributionsFGComponent },
      { path: 'charitable-contributions-property-fg', component: CharitableContributionsPropertyFGComponent },
      { path: 'charitable-contributions-Records-fg', component: CharitableContributionsRecordsFGComponent },
      { path: 'advanced-charity-techniques-fg', component: AdvancedCharityTechniquesFGComponent },
      { path: 'fraudulent-charities-fg', component: FraudulentCharitiesFGComponent },
      { path: 'charitable-contributions-faq', component: CharitableContributionsFAQComponent },
      { path: 'charitable-deductions-faq', component: CharitableDeductionsFAQComponent },
      { path: 'avoiding-scams', component: AvoidingScamsComponent },
      { path: 'con-artists-fg', component: ConArtistsFGComponent },
      { path: 'avoiding-scams-faq', component: AvoidingScamsFAQComponent },
      { path: 'getting-divorce', component: GettingDivorceComponent },
      { path: 'getting-divorced-faq', component: GettingDivorcedFAQComponent },
      { path: 'major-illness', component: MajorIllnessComponent },
      { path: 'death-of-loved-ones', component: DeathOfLovedOnesComponent },
      { path: 'death-of-spouse-fg', component: DeathOfSpouseFGComponent },
      { path: 'funerals-fg', component: FuneralsFGComponent },
      { path: 'death-of-loved-one-faq', component: DeathOfLovedOneFAQComponent },
      { path: 'improving-retirement', component: ImprovingRetirementComponent },
      { path: 'survivors-benefits-fg', component: SurvivorsBenefitsFGComponent },
      { path: 'pension-fg', component: PensionFGComponent },
      { path: 'reverse-mortgages-fg', component: ReverseMotgagesFGComponent },
      { path: 'retirement-money-fg', component: RetirementMoneyFGComponent },
      { path: 'handling-situations', component: HandlingSituationsComponent },
      { path: 'saving-money-fg', component: SavingMoneyFGComponent },
      { path: 'recording-guide-fg', component: RecordingGuideFGComponent },
      { path: 'documnent-locator-system-fg', component: DocumnentLocatorSystemFGComponent },
      { path: 'other-situation-faq', component: OtherSituationFAQComponent },
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
