import { TestBed } from '@angular/core/testing';

import { StudentApi } from './student-api';
import { student } from '../../shared/entities';

describe('StudentApi', () => {
  let service: StudentApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentApi);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should have a method to get students', () => {
    // const students = service.getAllStudents();
    // expect(students).toBeDefined();
    // expect(students.subscribe).toBeDefined();
    // expect(students.subscribe).toBeInstanceOf(Function);
    // expect(students).toBeInstanceOf(Object);
    // expect(service.getAllStudents).toBeTruthy();

    // const studentData = students.subscribe(data => {
    //   expect(data).toBeInstanceOf(Array);
    //   if (data.length > 0) {
    //     expect(data[0]).toBeTrue();
    //   }
    // });

    // expect(studentData).toBeDefined();

    const student = service.getElementById(17);
    expect(student).toBe("Cruickshank");
  });
});
