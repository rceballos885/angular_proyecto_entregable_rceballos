import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { Toolbar } from './toolbar/toolbar';
import { Navbar } from './navbar/navbar';

import { RouterTestingModule } from '@angular/router/testing';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterOutlet, Toolbar, Navbar, CommonModule, 
     MatSnackBarModule, MatDividerModule, RouterTestingModule],
      providers: [provideZonelessChangeDetection(),  
           { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  fit('should render title', () => {
    const fixture = TestBed.createComponent(App);
    
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Entregable_01_RCeballos');
  });
});
