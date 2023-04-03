import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CandidatesService {
  private API_URL: string = 'http://127.0.0.1:8000/api/users';
  constructor(private http: HttpClient) {}
  getCandidates(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }
  addCandidate(user: any ): Observable<any[]> {
    return this.http.post<any[]>(`${this.API_URL}/storeUser`,user);
  }
  editCandidate(userId: number | string |null ,user:any): Observable<any[]> {
    return this.http.put<any[]>(`${this.API_URL}/updateUser/${userId}`,user);
  }
  deleteCandidate(userId: number | string | null): Observable<any[]> {

    return this.http.delete<any[]>(`${this.API_URL}/deletedUser/${userId}`);
  }
findCandidate(userId: number | string |null ): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/showUser/${userId}`);
  }
// searchCandidate()

}
