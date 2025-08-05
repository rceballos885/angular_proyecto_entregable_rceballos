import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  id :string | null = null;
  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params => {
      console.log(params['id']); // Log the 'id' parameter from the route
    });
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    
  }

}
