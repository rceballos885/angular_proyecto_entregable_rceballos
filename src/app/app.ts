import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';

import {  } from '@angular/router';
import { Toolbar } from "./toolbar/toolbar";
import { Navbar } from "./navbar/navbar";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { student } from '../shared/entities';
import { StudentsTable } from "./features/students-table/students-table";
import { AddForm } from "./features/add-form/add-form";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { RouterTestingModule } from '@angular/router/testing';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, Navbar, CommonModule, 
     MatSnackBarModule, MatDividerModule, RouterTestingModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  students: student[] = [];
  activeSection: string = "listStudents";
  protected title = 'Entregable_01_RCeballos';
  routerUrl = '';

  constructor(public router: Router) {  }

  ngOnInit(): void {
    // Aquí sí puedes acceder a la URL actual
    console.log(this.router.url);

    // Si quieres reaccionar a cambios de ruta:
    this.router.events.subscribe(() => {
      this.routerUrl = this.router.url;
      console.log('Ruta actual:', this.router.url);
    });
  }
}