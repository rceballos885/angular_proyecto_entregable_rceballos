import { Component, Input, NgModule } from '@angular/core';
import { studens } from '../../shared/entities';

import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';



@Component({
  selector: 'app-students-table',
  imports: [MatTableModule],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css'
})
export class StudentsTable {
  // This component will handle the display of students in a table format
  // You can implement methods to handle sorting, filtering, etc. here

  // Example property to hold students data
  @Input() students: studens[] = []; // Replace 'any' with the appropriate type if needed
  displayedColumns: string[] = ['id', 'name', 'description', 'createdAt', 'updatedAt'];

  constructor() {
    // Initialization logic can go here
  }

  // // Example method to set students data
  // setStudents(data: studens[]) {
  //   this.students = data;
  // }

  // Add this method to your StudentsTable component class
  announceSortChange(event: any): void {
    // You can implement any logic here, or leave it empty if not needed
    // For accessibility, you might want to announce the sort change
    // Example: console.log('Sort changed:', event);
  }

}
