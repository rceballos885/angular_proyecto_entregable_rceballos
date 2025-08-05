import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { MatFormFieldModule, FloatLabelType } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { student } from '../../../shared/entities';

@Component({
  selector: 'app-add-form',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, CommonModule, MatButtonModule, MatInputModule],
  templateUrl: './add-form.html',
  styleUrl: './add-form.css'
})
export class AddForm implements OnInit {
  studentForm!: FormGroup;
  @Output() studentAdded = new EventEmitter<student>();
  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Initialization logic can go here
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [
        Validators.required,
        Validators.min(0), // Assuming age should be at least 1
      ]],
      surname: [''], // Optional field
      rut: ['', Validators.required],
      average: ['', [
        Validators.required,
        Validators.min(0), // Assuming average should be at least 1
        Validators.max(10) // Assuming average should not exceed 7
      ]] // Assuming average is required
    });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted');
    if (this.studentForm.valid) {
      const newStudent: student = this.studentForm.value;
      this.studentAdded.emit(newStudent);
      console.log('New student added:', newStudent);
      this.onReset(); // Reset the form after submission
    } else {
      console.error('Form is invalid');
    }
  }

  onReset() {
    // Reset the form to its initial state
    this.studentForm.reset();
  }

  protected readonly floatLabel = toSignal(
    this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')),
    { initialValue: 'auto' },
  );
}
