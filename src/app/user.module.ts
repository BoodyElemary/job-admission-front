import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './components/exam/exam.component';

const routes: Routes = [
  {
    path: 'user',
    children: [{ path: 'exam/:id', component: ExamComponent }],
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
