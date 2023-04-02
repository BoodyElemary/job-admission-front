import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { QuestionsService } from 'src/app/services/questions.service';


@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css']
})
export class QuestionsFormComponent implements OnInit {

  jobs:any;
  jobId:number=0;
  answer1Dropdown:string="";
  answer2Dropdown:string="";
  answer3Dropdown:string="";
  answer4Dropdown:string="";
  QuestionForm: FormGroup = new FormGroup({});

  constructor( private questionService:QuestionsService ,private fb:FormBuilder){

  }
  ngOnInit(): void {
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

     this.questionService.getAllJobs().subscribe({
      next:(response)=>{
        this.jobs=response;

      }
    });
  }
  onSubmit(){
    if(this.QuestionForm.valid){
      // console.log(this.QuestionForm.value);
      this.questionService.addJobQuestions(this.QuestionForm.value).subscribe({
        next:(response)=>{
          console.log(response);
        }
      })
    }
  }

}
