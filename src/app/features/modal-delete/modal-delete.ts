import { Component, Inject, inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { student } from '../../../shared/entities';


@Component({
  selector: 'app-modal-delete',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './modal-delete.html',
  styleUrl: './modal-delete.css'
})
export class ModalDelete {
  readonly dialogRef = inject(MatDialogRef<ModalDelete>);

  constructor(@Inject(MAT_DIALOG_DATA) public student: student) {

    // You can use the injected student data here
    console.log('Student data received in modal:', this.student);
    // Additional initialization logic can go here if needed
  }
  onClose() {
    this.dialogRef.close(this.student);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
