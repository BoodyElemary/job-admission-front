import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css']
})
export class QuestionsFormComponent implements OnInit {

  jobs:any;
  jobId:number=0;
  answer1:string="";
  answer2:string="";
  answer3:string="";
  answer4:string="";

  constructor( private questionService:QuestionsService){

  }
  ngOnInit(): void {
     this.questionService.getAllJobs().subscribe({
      next:(response)=>{
        this.jobs=response;

      }
    });
  }
  logger(){
    console.log(this.jobId);
  }

}
