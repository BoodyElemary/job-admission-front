import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IjobQuestions } from '../models/IjobQuestions';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private API_URL: string = 'http://127.0.0.1:8000/api/jobQuestions';
  constructor(private http: HttpClient) {}
  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }
  getJobQuestions(jobId: number | string | null): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/${jobId}`);
  }

  getAllJobs() {
    return this.http.get<any[]>(`http://127.0.0.1:8000/api/allJobs`);
  }

  submitQuestions(userAnswers:any){
     return this.http.post<any[]>(`http://localhost:8000/api/user/jobExam`,userAnswers);
  }
  deleteJobQuestion(jobId:number){
    return this.http.delete<any[]>(`http://localhost:8000/api/jobQuestions/deleteJobQuestion/${jobId}`);

  }
  addJobQuestions(JobQuestions:any){
    return this.http.post<any[]>(`http://localhost:8000/api/jobQuestions/addJobQuestion`,JobQuestions);

  }
  getSingleQuestion(id:number){
    return this.http.get<any[]>(`http://127.0.0.1:8000/api/jobQuestions/showQuestion/${id}`);
  }

  editQuestion(id:number,data:any){
    return this.http.put<any[]>(`http://localhost:8000/api/jobQuestions/updateJobQuestion/${id}`,data);
  }


}
