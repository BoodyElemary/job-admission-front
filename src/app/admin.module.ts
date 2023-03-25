import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { AllQuestionsComponent } from './components/admin/all-questions/all-questions.component';
import { JobQuestionsComponent } from './components/admin/job-questions/job-questions.component';
import { AddQuestionsComponent } from './components/admin/add-questions/add-questions.component';

const routes: Routes = [
  { path: 'allQuestions', component: AllQuestionsComponent },
  { path: 'jobQuestions/:id', component: JobQuestionsComponent },
  { path: 'allQuestions/addQuestion', component: AddQuestionsComponent },

  { path: 'dashboard', component: AdminHomeComponent, title: 'dashboard' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModule {}
