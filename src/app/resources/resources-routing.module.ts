import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPortalComponent } from './components/client-portal/client-portal.component';
import { FinancialCalculatorsComponent } from './components/financial-calculators/financial-calculators.component';
import { GuidesComponent } from './components/guides/guides.component';
import { InternetLinksComponent } from './components/internet-links/internet-links.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { PreviousNewsletterComponent } from './components/previous-newsletter/previous-newsletter.component';
import { ResourcesComponent } from './components/resources/resources.component';

const routes: Routes = [
  { path: '', component: ResourcesComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'financial-calculators', component: FinancialCalculatorsComponent },
  { path: 'client-portal', component: ClientPortalComponent },
  { path: 'internet-links', component: InternetLinksComponent },
  { path: 'newsletter/previous-newsletter', component: PreviousNewsletterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
