import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ClientReviewsComponent } from './components/client-reviews/client-reviews.component';
import { EmploymentOpportunitiesComponent } from './components/employment-opportunities/employment-opportunities.component';
import { OurValuesComponent } from './components/our-values/our-values.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'our-values', component: OurValuesComponent },
  { path: 'client-reviews', component: ClientReviewsComponent },
  { path: 'employment-opportunities', component: EmploymentOpportunitiesComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
