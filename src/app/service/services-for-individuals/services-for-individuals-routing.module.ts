import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElderCareComponent } from './components/elder-care/elder-care.component';
import { EstatePlanningComponent } from './components/estate-planning/estate-planning.component';
import { PersonalFinancialPlanningComponent } from './components/personal-financial-planning/personal-financial-planning.component';
import { RetirementPlanningComponent } from './components/retirement-planning/retirement-planning.component';
import { ServiceForIndividualsComponent } from './components/service-for-individuals/service-for-individuals.component';
import { WealthManagementComponent } from './components/wealth-management/wealth-management.component';

const routes: Routes = [
  { path: '', component: ServiceForIndividualsComponent },
  { path: 'personal-financial-planning', component: PersonalFinancialPlanningComponent },
  { path: 'retirement-planning', component: RetirementPlanningComponent },
  { path: 'estate-planning', component: EstatePlanningComponent },
  { path: 'elder-care', component: ElderCareComponent },
  { path: 'wealth-management', component: WealthManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesForIndividualsRoutingModule { }
