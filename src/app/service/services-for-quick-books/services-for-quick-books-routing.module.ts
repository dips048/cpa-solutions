import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersToQuickBooksComponent } from './components/answers-to-quick-books/answers-to-quick-books.component';
import { ServicesForQuickBooksComponent } from './components/services-for-quick-books/services-for-quick-books.component';
import { SetupQuickBooksComponent } from './components/setup-quick-books/setup-quick-books.component';
import { TipsQuickBooksComponent } from './components/tips-quick-books/tips-quick-books.component';
import { TrainingQuickBooksComponent } from './components/training-quick-books/training-quick-books.component';
import { TuneUpQuickBooksComponent } from './components/tune-up-quick-books/tune-up-quick-books.component';
import { WhyQuickBooksComponent } from './components/why-quick-books/why-quick-books.component';

const routes: Routes = [
  { path: '', component: ServicesForQuickBooksComponent },
  { path: 'why-quick-books', component: WhyQuickBooksComponent },
  { path: 'setup-quick-books', component: SetupQuickBooksComponent },
  { path: 'training-quick-books', component: TrainingQuickBooksComponent },
  { path: 'answers-to-quick-books', component: AnswersToQuickBooksComponent },
  { path: 'tune-up-quick-books', component: TuneUpQuickBooksComponent },
  { path: 'tips-quick-books', component: TipsQuickBooksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesForQuickBooksRoutingModule { }
