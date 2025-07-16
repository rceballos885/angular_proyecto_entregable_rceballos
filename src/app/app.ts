import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from "./toolbar/toolbar";
import { Navbar } from "./navbar/navbar";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { studens } from '../shared/entities';
import { StudentsTable } from "./students-table/students-table";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, Navbar, CommonModule, HttpClientModule, StudentsTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App implements OnInit {
  students: studens[] = [];

  protected title = 'Entregable_01_RCeballos';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<studens[]>('mocks/students.json').subscribe({
      next: (data) => {
        this.students = data;
        console.log('Students fetched successfully:', data);
      }
    });

    
  }

  // Add this method to your StudentsTable component class
  announceSortChange(event: any): void {
    // You can implement any logic here, or leave it empty if not needed
    // For accessibility, you might want to announce the sort change
    // Example: console.log('Sort changed:', event);
  }
}
