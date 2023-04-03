import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Timestamp } from 'rxjs';
import { JobsService } from 'src/app/services/jobs.service';
@Component({
  selector: 'app-edit-jobs',
  templateUrl: './edit-jobs.component.html',
  styleUrls: ['./edit-jobs.component.css']
})
export class EditJobsComponent {

  job:any = {success:"", data:{}, message:""};
  id:number=0;
  title:string="";
  details:string="";
  state:string=""
  open_date:Date=new Date();
  close_date:Date=new Date();
  JobForm: FormGroup = new FormGroup({});

  constructor( private jobService:JobsService ,private fb:FormBuilder,private currentRoute:ActivatedRoute){
    this.id=Number(this.currentRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {

    this.JobForm =this.fb.group(
      {
        title: new FormControl ('',[Validators.required]),
        details: new FormControl ('',[Validators.required]),
        state: new FormControl ('',[Validators.required]),
        open_date: new FormControl ('',[Validators.required]),
        close_date: new FormControl ('',[Validators.required]),
      }
    )

    this.jobService.getJob(this.id).subscribe({
      next:(response)=>{
        this.job=response;
        console.log(this.job);
        this.id=this.job.data.id;
        this.job.message=""
        this.job.data.open_date = this.convertStampToDate(this.job.data.open_date)
        this.job.data.close_date = this.convertStampToDate(this.job.data.close_date)
        this.JobForm.setValue(
          {
            title: this.job.data.title,
            details: this.job.data.details,
            state: this.job.data.state,
            open_date: this.job.data.open_date,
            close_date: this.job.data.close_date,
          }
        )
      }
    })
  }

  convertStampToDate(timestamp:any){
    var todate=new Date(timestamp).getDate();
    var tomonth=new Date(timestamp).getMonth()+1;
    var toyear=new Date(timestamp).getFullYear();
    var original_date = `${toyear}-${tomonth}-${todate}`;
    return original_date;
  }
  onSubmit(){
    if(this.JobForm.valid){
      this.jobService.editJob(this.id,this.JobForm.value).subscribe({
        next:(response)=>{
          console.log(response);
          this.job = response;
          this.JobForm.setValue(
            {
              title: this.job.data.title,
              details: this.job.data.details,
              state: this.job.data.state,
              open_date: this.job.data.open_date,
              close_date: this.job.data.close_date,
            }
          )
        }
      })
    }
  }

}
