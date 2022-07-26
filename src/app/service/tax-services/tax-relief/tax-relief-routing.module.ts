import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxReliefComponent } from './components/tax-relief/tax-relief.component';

const routes: Routes = [{ path: '', component: TaxReliefComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxReliefRoutingModule { }
