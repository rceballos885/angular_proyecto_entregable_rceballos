import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import {RoutePaths} from '../../shared/routes';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
// @Output() activeSection = new EventEmitter<string>(); // Default active section
RoutePaths = RoutePaths; // Importing the RoutePaths enum
  constructor() {
    // Initialization logic can go here
  }

  // Method to change the active section
  // changeSection(section: string) {
  //   this.activeSection.emit(section);
  //   console.log(`Active section changed to: ${section}`);
  // }
}
