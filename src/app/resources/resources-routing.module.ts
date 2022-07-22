import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidesComponent } from './components/guides/guides.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ResourcesComponent } from './components/resources/resources.component';

const routes: Routes = [
  { path: '', component: ResourcesComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'guides', component: GuidesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
