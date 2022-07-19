import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { OurValuesComponent } from './components/our-values/our-values.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'our-values', component: OurValuesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
