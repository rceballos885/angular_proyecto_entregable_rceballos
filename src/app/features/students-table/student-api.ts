import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../../../shared/entities';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentApi {
  /**
   *
   */
  baseUrl = 'http://localhost:3000'; 
  constructor(private http: HttpClient) {    
  }

  getStudents() {
    return this.http.get<student[]>(`${this.baseUrl}/students`).pipe(delay(1000)); // Simulate network delay
  }
}
