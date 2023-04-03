import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';


@Component({
  selector: 'app-job-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.css']
})
export class JobsFormComponent implements OnInit {

  job:any={success:"", data:{}, message:""};
  jobMessage:string="";
  title:string="";
  details:string="";
  open_date:Date=new Date();
  close_date:Date=new Date();
  JobForm: FormGroup = new FormGroup({});

  constructor( private JobService:JobsService ,private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.JobForm =this.fb.group(
      {
      title: new FormControl ('',[Validators.required]),
      details: new FormControl ('',[Validators.required]),
      open_date: new FormControl ('',[Validators.required]),
      close_date: new FormControl ('',[Validators.required]),
      }
    )

  }
  onSubmit(){
    console.log("valid data: ", this.JobForm.valid);

    if(this.JobForm.valid){
      this.JobService.addJob(this.JobForm.value).subscribe({
        next:(response)=>{
          this.job = response;
          this.title = "";
          this.details ="";
          this.open_date =new Date();
          this.close_date =new Date();
        }
      })

    }
  }

}
