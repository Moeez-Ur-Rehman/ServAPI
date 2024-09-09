import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Import the environment

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl; // Use the environment variable

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/endpoint`); // Use apiUrl from the environment
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/endpoint`, data); // Use apiUrl from the environment
  }
}
