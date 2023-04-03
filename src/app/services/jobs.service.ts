import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private API_URL: string = 'http://127.0.0.1:8000/api/jobs';
  constructor(private http: HttpClient) {}
  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }
  getJob(jobId: number | string | null): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/${jobId}`);
  }
  addJob(body:any): Observable<any[]>{
    return this.http.post<any[]>(`${this.API_URL}/store`, body);
  }
  editJob(jobId: number | string | null, body:any): Observable<any[]>{
    return this.http.put<any[]>(`${this.API_URL}/update/${jobId}`, body);
  }
  deleteJob(jobId: number | string | null): Observable<any[]>{
    return this.http.delete<any[]>(`${this.API_URL}/delete/${jobId}`);
  }

  searchJob(){

  }

}
