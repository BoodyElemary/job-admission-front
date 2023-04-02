import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SubmitExamDialogComponent } from '../submit-exam-dialog/submit-exam-dialog.component';
import { MatDialog } from '@angular/material/dialog';

interface Question {
  [key: string]: string[];
}

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent {
  examQuestions: any;
  examAnswers: any[] = [];
  jobId: number = 0;
  jobName: string = '';
  QuestionsObj: Question = {};
  visibleExamQuestions: any[] = [];
  form: FormGroup = new FormGroup({});
  pageSize: number = 4;
  length: number = 0;

  constructor(
    private service: QuestionsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public dialog:MatDialog
  ) {
    this.jobId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(this.activatedRoute.snapshot.paramMap)
  }

  ngOnInit(): void {
    this.examQuestions = this.service.getJobQuestions(this.jobId).subscribe({
      next: (response) => {
        this.examQuestions = response;
        this.jobName = Object.keys(this.examQuestions)[0];
        this.examAnswers = this.examQuestions[`${this.jobName}`];
        this.length = this.examAnswers.length;
        this.examAnswers.forEach((item: any) => {
          this.QuestionsObj[`${item.question}`] = [
            item.option1,
            item.option2,
            item.option3,
            item.option4,
          ];
        });

        this.form = this.fb.group({});
        for (const key in this.QuestionsObj) {
          if (this.QuestionsObj.hasOwnProperty(key)) {
            this.form.addControl(
              key,
              this.fb.control(null, Validators.required)
            );
          }
        }

        this.onPageChange({
          pageIndex: 0,
          pageSize: this.pageSize,
          length: this.length,
        });
      },
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.visibleExamQuestions = this.examAnswers.slice(startIndex, endIndex);

    this.visibleExamQuestions = this.visibleExamQuestions.map((item: any) => {
      return { id: item.id, question: item.question };
    });
  }




  examSubmit() {
    let exam:any ={};
    exam.jobId=this.jobId;
    exam.userId=3;
    exam.userAnswers={...this.form.value};
    console.log((exam));
    this.service.submitQuestions(exam).subscribe({
      next:(response)=>{
        console.log(response);
      }
    })


  }



  openDialog(): void {
    const dialogRef = this.dialog.open(SubmitExamDialogComponent, {
      // data: {name: this.name, animal: this.animal},
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.examSubmit();
      }
    });
  }
}
