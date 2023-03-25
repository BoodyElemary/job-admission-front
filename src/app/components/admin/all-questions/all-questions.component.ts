import { Component, OnInit, ViewChild } from '@angular/core';
import { IjobQuestions } from 'src/app/models/IjobQuestions';
import { QuestionsService } from 'src/app/services/questions.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { distinctUntilChanged, fromEvent } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteQuestionDialogComponent } from '../delete-question-dialog/delete-question-dialog.component';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'job','question', 'option1', 'option2','option3','option4','rightOption','Action'];
  questions = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort ;


  constructor(private questionService:QuestionsService,public dialog:MatDialog){}
  ngOnInit(): void {
    this.getQuestions();
    this.searchQuestions();
  }

  getQuestions(){
    // this.questionService.getQuestions().subscribe(questions=>{
    //   this.questions.data = questions;
    //   this.questions.paginator=this.paginator;
    //   this.questions.sort=this.sort;
    //   console.log(questions);
    // })
    this.questionService.getQuestions().subscribe({
      next:(resposne)=>{
        console.log(resposne);
      this.questions.data=resposne;
      this.questions.paginator=this.paginator;
      this.questions.sort=this.sort;
      }
    });
  }

  searchQuestions(){

    const searchInput=document.getElementById("questionSearchInput");

    const searchObservable = fromEvent(searchInput!, 'input').pipe(
      distinctUntilChanged()
    );

    searchObservable.subscribe((event: any) => {
      const filterValue = event.target.value.trim().toLowerCase();
      this.questions.filter = filterValue;
    });




  }


  editFun(id:number){
    console.log(id);
  }



  openDialog(id:number): void {
    const dialogRef = this.dialog.open(DeleteQuestionDialogComponent, {
      // data: {name: this.name, animal: this.animal},
      width: '500px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.editFun(id);
      }
    });
  }
}
