import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from "./toolbar/toolbar";
import { Navbar } from "./navbar/navbar";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { student } from '../shared/entities';
import { StudentsTable } from "./students-table/students-table";
import { AddForm } from "./add-form/add-form";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, Navbar, CommonModule, StudentsTable, AddForm, MatSnackBarModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  students: student[] = [];
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
    debugger;
    console.log('Student added:', student);
    this.students = [...this.students, student];
    this.openSnackBar('Estudiante agregado correctamente', 'Cerrar');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
