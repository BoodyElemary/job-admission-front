import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//custom modules imports
import { AdminModule } from './admin.module';
import { UserModule } from './user.module';

//angular material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { StatCardComponent } from './components/admin/stat-card/stat-card.component';
import { MatCardModule } from '@angular/material/card';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AllQuestionsComponent } from './components/admin/all-questions/all-questions.component';
import { HttpClientModule } from '@angular/common/http';
import { AddQuestionsComponent } from './components/admin/add-questions/add-questions.component';
import { DeleteQuestionDialogComponent } from './components/admin/delete-question-dialog/delete-question-dialog.component';
import { JobQuestionsComponent } from './components/admin/job-questions/job-questions.component';
import { QuestionsFormComponent } from './components/admin/questions-form/questions-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ExamComponent } from './components/exam/exam.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitExamDialogComponent } from './components/submit-exam-dialog/submit-exam-dialog.component';
import { EditQuestionsComponent } from './components/admin/edit-questions/edit-questions.component';
import { AllJobsComponent } from './components/admin/all-jobs/all-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    StatCardComponent,
    AdminHomeComponent,
    NotFoundComponent,
    AdminHeaderComponent,
    AllQuestionsComponent,
    AddQuestionsComponent,
    DeleteQuestionDialogComponent,
    JobQuestionsComponent,
    QuestionsFormComponent,
    ExamComponent,
    SubmitExamDialogComponent,
    EditQuestionsComponent,
    AllJobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    LayoutModule,
    MatCardModule,
    AdminModule,
    UserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
