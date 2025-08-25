import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { student } from '../../shared/entities';
import { catchError, delay, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentApi {

  private _httpClient = inject(HttpClient);

  /**
   *
   */
  baseUrl = 'https://689f7d176e38a02c581670eb.mockapi.io/api/v1';
  constructor(private http: HttpClient) {
    this._httpClient = inject(HttpClient);
  }

  getAllStudents(): Observable<student[]> {
    return this._httpClient.get<student[]>(`${this.baseUrl}/Student/`)
    .pipe(catchError(this.handlerError)); // Simulate network delay
  }

  getStudentById(id: number):  Observable<student> {
    return this.http.get<student>(`${this.baseUrl}/Student/${id}`)
    .pipe(catchError(this.handlerError)); // Simulate network delay
  }

  addStudent(student: student): Observable<student> {
    return this.http.post<student>(`${this.baseUrl}/Student`, student)
    .pipe(catchError(this.handlerError)); // Simulate network delay
  }

  updateStudent(id: number, student: student): Observable<student> {
    return this.http.put<student>(`${this.baseUrl}/Student/${id}`, student)
    .pipe(catchError(this.handlerError));// Simulate network delay
  }

  deleteStudent(id: number): Observable<student> {
    return this.http.delete<student>(`${this.baseUrl}/Student/${id}`)
    .pipe(catchError(this.handlerError)); // Simulate network delay
  }

  private handlerError(error: HttpErrorResponse) {
    // You can customize the error handling logic here
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.warn(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    } 

    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getElementById(id: number): string {
    // This is a mock implementation. Replace with actual logic to fetch student by ID.
    // For demonstration, returning a static string.
    let studentName = '';

    this.getStudentById(id).subscribe({
      next: (data : student) => {
        console.log('Student fetched successfully:', data);
        studentName = data.name;
      },
      error: (err) => {
        console.error('Error fetching student:', err);
        studentName = 'Error fetching student';
      }
    });
    
    return studentName;
  }
}
