import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { student } from '../../shared/entities';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FullnamePipe } from '../../shared/pipes/fullname-pipe';

import {  
  MatDialog
} from '@angular/material/dialog';
import { ModalDelete } from '../modal-delete/modal-delete';



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
  @Output() studentsChangeList = new EventEmitter<student[]>();
  displayedColumns: string[] = ['name', 'age', 'rut', 'average', 'main'];
  
  readonly dialog = inject(MatDialog);

  constructor() {
    // Initialization logic can go here
  }

  openDialog(student: student): void {
    const dialogRef = this.dialog.open(ModalDelete, {
      data: student,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteStudent(result.id);
      }
    });
  }

  deleteStudent(id: number): void {
    // Implement the logic to delete a student by id
    console.log(`Delete student with id: ${id}`);

    this.studentsChangeList.emit(this.students.filter(student => student.id !== id));
    // You can emit an event or call a service to handle the deletion
  }
}