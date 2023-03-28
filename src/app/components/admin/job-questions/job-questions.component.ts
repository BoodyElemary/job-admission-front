import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, distinctUntilChanged } from 'rxjs';
import { QuestionsService } from 'src/app/services/questions.service';
import { MatDialog } from '@angular/material/dialog';

import { DeleteQuestionDialogComponent } from '../delete-question-dialog/delete-question-dialog.component';

@Component({
  selector: 'app-job-questions',
  templateUrl: './job-questions.component.html',
  styleUrls: ['./job-questions.component.css'],
})
export class JobQuestionsComponent implements OnInit {
  jobId: number | null = 0;
  jobName: string = '';
  questions: any;

  displayedColumns: string[] = [
    'id',
    'question',
    'option1',
    'option2',
    'option3',
    'option4',
    'rightOption',
    'Action',
  ];
  jobQuestions = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private currentRoute: ActivatedRoute,
    private questionServices: QuestionsService,
    public dialog: MatDialog
  ) {
    this.jobId = Number(this.currentRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    console.log(this.jobId);
    this.questions = this.questionServices
      .getJobQuestions(this.jobId)
      .subscribe({
        next: (resposne) => {
          this.questions = resposne;
          this.jobName = Object.keys(this.questions)[0];
          this.jobQuestions.data = this.questions[this.jobName];
          console.log(this.jobQuestions.data);
          this.jobQuestions.paginator = this.paginator;
          this.jobQuestions.sort = this.sort;
        },
      });
    this.searchQuestions();
  }

  searchQuestions() {
    const searchInput = document.getElementById('jobQuestionSearchInput');

    const searchObservable = fromEvent(searchInput!, 'input').pipe(
      distinctUntilChanged()
    );

    searchObservable.subscribe((event: any) => {
      const filterValue = event.target.value.trim().toLowerCase();
      this.jobQuestions.filter = filterValue;
    });
  }

  editFun(id: number) {
    console.log(id);
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteQuestionDialogComponent, {
      // data: {name: this.name, animal: this.animal},
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        this.editFun(id);
      }
    });
  }
}
