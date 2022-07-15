import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxCenterComponent } from './components/tax-center/tax-center.component';

const routes: Routes = [{ path: '', component: TaxCenterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxCenterRoutingModule { }
