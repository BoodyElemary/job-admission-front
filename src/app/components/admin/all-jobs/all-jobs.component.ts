import { Component, OnInit, ViewChild } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { distinctUntilChanged, fromEvent } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteQuestionDialogComponent } from '../delete-question-dialog/delete-question-dialog.component';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title','details', 'state', 'open_date','close_date','Action'];
  jobs = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort ;


  constructor(private jobsService:JobsService,public dialog:MatDialog){}
  ngOnInit(): void {
    this.getJobs();
    this.searchJobs();
  }

  getJobs(){
    this.jobsService.getJobs().subscribe({
      next:(resposne)=>{
        this.jobs.data=resposne;
        this.jobs.paginator=this.paginator;
        this.jobs.sort=this.sort;
      }
    })
  }

  searchJobs(){

    const searchInput=document.getElementById("jobSearchInput");
    const searchObservable = fromEvent(searchInput!, 'input').pipe(
      distinctUntilChanged()
    );

    searchObservable.subscribe((event: any) => {
      const filterValue = event.target.value.trim().toLowerCase();
      this.jobs.filter = filterValue;
    });
  }

  deleteJob(id: number) {
  this.jobsService.deleteJob(id).subscribe({
    next:(response)=>{
      this.jobs.data=this.jobs.data.filter((job)=>job.id !==id);
    }

  })
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteQuestionDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteJob(id);
      }
    });
  }
}

