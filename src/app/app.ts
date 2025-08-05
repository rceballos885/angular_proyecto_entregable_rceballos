import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from "./toolbar/toolbar";
import { Navbar } from "./navbar/navbar";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { student } from '../shared/entities';
import { StudentsTable } from "./features/students-table/students-table";
import { AddForm } from "./features/add-form/add-form";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, Navbar, CommonModule, StudentsTable, AddForm, MatSnackBarModule, MatDividerModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  students: student[] = [];
  activeSection: string = "listStudents";
  protected title = 'Entregable_01_RCeballos';
  private _snackBar = inject(MatSnackBar);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<student[]>('mocks/students.json').subscribe({
      next: (data) => {
        this.students = data;
        console.log('Students fetched successfully:', data);
      }
    });
  }

  addStudent(student: student) {  
    console.log('Adding student:', student);
    student.id = this.students.length + 1; // Assign a new ID based on the current length
    console.log('Student added:', student);
    this.students = [...this.students, student];
    this.openSnackBar('Estudiante agregado correctamente', 'Cerrar');
  }

  deleteStudent(studens: student[]) {
    this.students = [...studens];
    this.openSnackBar('Estudiante eliminado correctamente', 'Cerrar');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000, // Duration in milliseconds
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  changeSection(section: string) {
    this.activeSection = section;
    console.log(`Active section changed to: ${section}`);
  }
}
