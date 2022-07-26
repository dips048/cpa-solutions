import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionComponent } from './components/construction/construction.component';
import { DentistsComponent } from './components/dentists/dentists.component';
import { HealthcareComponent } from './components/healthcare/healthcare.component';
import { HospitalityComponent } from './components/hospitality/hospitality.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { LawFirmsComponent } from './components/law-firms/law-firms.component';
import { ManufacturersComponent } from './components/manufacturers/manufacturers.component';
import { RealEstateComponent } from './components/real-estate/real-estate.component';

const routes: Routes = [
  { path: '', component: IndustriesComponent },
  { path: 'construction', component: ConstructionComponent },
  { path: 'dentists', component: DentistsComponent },
  { path: 'healthcare', component: HealthcareComponent },
  { path: 'hospitality', component: HospitalityComponent },
  { path: 'law-firms', component: LawFirmsComponent },
  { path: 'manufacturers', component: ManufacturersComponent },
  { path: 'real-estate', component: RealEstateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriesRoutingModule { }
