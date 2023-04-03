import { Component, OnInit, ViewChild } from '@angular/core';
import { IjobQuestions } from 'src/app/models/IjobQuestions';
import { CandidatesService } from 'src/app/services/candidates.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { distinctUntilChanged, fromEvent } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteQuestionDialogComponent } from '../delete-question-dialog/delete-question-dialog.component';


@Component({
  selector: 'app-all-candidates',
  templateUrl: './all-candidates.component.html',
  styleUrls: ['./all-candidates.component.css']
})
export class AllCandidatesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'userName', 'phone', 'address', 'city', 'state', 'Action'];
  candidates = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private candidateService: CandidatesService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getCandidates();
    this.searchCandidates();
    // this.searchQuestions();
  }

  getCandidates() {

    this.candidateService.getCandidates().subscribe({
      next: (resposne) => {
        console.log(resposne);
        this.candidates.data = resposne;
        this.candidates.paginator = this.paginator;
        this.candidates.sort = this.sort;
      }

    });

  }
  deleteCandidate(id: number) {
    // console.log("object");
    this.candidateService.deleteCandidate(id).subscribe({
      next: (response) => {
        this.candidates.data = this.candidates.data.filter((candidate) => candidate.id !== id);
        console.log(response)
      }
    })
  }
   searchCandidates(){

    const searchInput=document.getElementById("candidateSearchInput");

    const searchObservable = fromEvent(searchInput!, 'input').pipe(
      distinctUntilChanged()
    );

    searchObservable.subscribe((event: any) => {
      const filterValue = event.target.value.trim().toLowerCase();
      this.candidates.filter = filterValue;
    });




  }
  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteQuestionDialogComponent, {
      // data: {name: this.name, animal: this.animal},
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The dialog was saasas');
      if (result) {
        this.deleteCandidate(id);
      }
    });
  }
}


