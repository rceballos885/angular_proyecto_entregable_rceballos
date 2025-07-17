import { Component, Input, NgModule } from '@angular/core';
import { student } from '../../shared/entities';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FullnamePipe } from '../../shared/pipes/fullname-pipe';



@Component({
  selector: 'app-students-table',
  imports: [MatTableModule, MatIconModule, MatMenuModule, MatButtonModule, FullnamePipe],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css'
})
export class StudentsTable {
  // This component will handle the display of students in a table format
  // You can implement methods to handle sorting, filtering, etc. here

  // Example property to hold students data
  @Input() students: student[] = []; // Replace 'any' with the appropriate type if needed
  displayedColumns: string[] = ['name', 'age', 'rut', 'average', 'main'];

  constructor() {
    // Initialization logic can go here
  }

  // // Example method to set students data
  // setStudents(data: studens[]) {
  //   this.students = data;
  // }





}

function deleteStudent(id: number): void {
  // Implement the logic to delete a student by id
  debugger;
  console.log(`Delete student with id: ${id}`);
  // You can emit an event or call a service to handle the deletion
}
