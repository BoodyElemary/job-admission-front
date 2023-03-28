import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
  examAnswers: any;
  jobId: number = 0;
  jobName: string = '';
  QuestionsObj: Question = {};
  form: FormGroup | null = null;

  constructor(
    private service: QuestionsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.jobId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.examQuestions = this.service.getJobQuestions(this.jobId).subscribe({
      next: (response) => {
        this.examQuestions = response;
        this.jobName = Object.keys(this.examQuestions)[0];
        this.examAnswers = this.examQuestions[`${this.jobName}`];
        // this.examQuestions = this.questions[this.jobName];
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

        console.log(this.QuestionsObj[`${Object.keys(this.QuestionsObj)[0]}`]);
        console.log(this.examAnswers);
      },
    });
  }
  examSubmit() {
    // let final: any = [];
    // document.getElementsByName('answer1');
    // answers.forEach((item: any) => {
    //   final.push(item['checked']);
    // });
    // console.log(final);
    // let answers = document.querySelector('input[name:"answer1"]:checked');
    // console.log(answers);

    console.log(this.form);
  }
}
