import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css']
})
export class EditQuestionsComponent {
  question:any;
  jobs:any;
  jobId:number=0;
  questionId:number=0;
  answer1Dropdown:string="";
  answer2Dropdown:string="";
  answer3Dropdown:string="";
  answer4Dropdown:string="";
  QuestionForm: FormGroup = new FormGroup({});

  constructor( private questionService:QuestionsService ,private fb:FormBuilder,private currentRoute:ActivatedRoute){
    this.jobId=Number(this.currentRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {

    this.questionService.getAllJobs().subscribe({
      next:(response)=>{
        this.jobs=response;

      }

    });

    this.QuestionForm =this.fb.group(
      {
      formJob:new FormControl('',Validators.required),
      question: new FormControl ('',[Validators.required]),
      answer1: new FormControl ('',[Validators.required]),
      answer2: new FormControl ('',[Validators.required]),
      answer3: new FormControl ('',[Validators.required]),
      answer4: new FormControl ('',[Validators.required]),
      rightAnswer:new FormControl('',Validators.required),


    }
    )

    this.questionService.getSingleQuestion(this.jobId).subscribe({
      next:(response)=>{
        this.question=response;
        // let rightOption=this.question.right_option;
        console.log(this.question);
        this.questionId=this.question.id;
        console.log(response);
        this.QuestionForm.setValue(
          {
            formJob:this.question.job_id,
            question: this.question.question,
            answer1: this.question.option1,
            answer2: this.question.option2,
            answer3: this.question.option3,
            answer4: this.question.option4,
            rightAnswer: this.question.right_option,

          }
        )
      }
    })







  }
  onSubmit(){
    if(this.QuestionForm.valid){
      console.log(this.questionId);

      this.questionService.editQuestion(this.questionId,this.QuestionForm.value).subscribe({
        next:(response)=>{
          console.log(response);
        }
      })
    }
  }

}
