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
}
