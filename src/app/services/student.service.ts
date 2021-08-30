import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Student } from '../interfaces/student';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http: HttpClient) { }



  getAllStudent(){

  	return this.http.get(`${apiUrl}/students`);
  	
  }

  listStudent: Student[] = []

  getStudent() {
    return this.listStudent.slice();
  }

  addStudent(student: Student) {
    this.listStudent.push(student)

  }
}
