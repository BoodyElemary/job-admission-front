import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidatesService } from 'src/app/services/candidates.service';
import { JobsService } from 'src/app/services/jobs.service';


@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent implements OnInit {
  candidates: any;
  candidatesCount: number = 0;
   jobs: any;
  jobsCount: number = 0;
    constructor(private candidateService: CandidatesService,private jobsService:JobsService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getCandidates();
    this.getJobs();

  }
  getCandidates() {
    this.candidateService.getCandidates().subscribe({
      next: (response) => {
        // console.log(resposne);
        this.candidates = response;
        this.candidatesCount = this.candidates.length;
        console.log(this.candidates.length);

      }
    });

  }
  getJobs(){
    this.jobsService.getJobs().subscribe({
      next:(response)=>{
        this.jobs.data = response;
        this.jobsCount= this.jobs.data.length;
        // console.log(this.jobs.data.length);

      }
    })
  }

}
