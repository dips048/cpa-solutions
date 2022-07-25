import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalFinancialPlanningComponent } from './components/personal-financial-planning/personal-financial-planning.component';
import { ServiceForIndividualsComponent } from './components/service-for-individuals/service-for-individuals.component';

const routes: Routes = [
  { path: '', component: ServiceForIndividualsComponent },
  { path: 'personal-financial-planning', component: PersonalFinancialPlanningComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesForIndividualsRoutingModule { }
