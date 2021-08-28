import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(public http: HttpClient) { }

  
  getAllTeacher(){

  	return this.http.get(`${apiUrl}/staff`);
  	
  }
}
