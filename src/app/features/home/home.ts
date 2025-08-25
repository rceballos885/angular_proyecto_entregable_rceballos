import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    // otros imports...
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor() {
  // Tu lógica aquí
}
}
