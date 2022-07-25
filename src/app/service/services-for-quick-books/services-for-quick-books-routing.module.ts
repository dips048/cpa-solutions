import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesForQuickBooksComponent } from './components/services-for-quick-books/services-for-quick-books.component';

const routes: Routes = [{ path: '', component: ServicesForQuickBooksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesForQuickBooksRoutingModule { }
