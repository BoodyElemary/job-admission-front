import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IjobQuestions } from '../models/IjobQuestions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private readonly API_URL='http://127.0.0.1:8000/api/jobQuestions'
  constructor(private http:HttpClient) { }
  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }
}
