import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

export interface Student {
  name: string;
  house: string;
  age:number;
  patronus: string;  
}



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  formulario: FormGroup;
  myItems: Student[] = new Array();
  newItem: any = {};

  AddItem() {    
     this.myItems.push(    
       this.newItem    
     );    
     this.newItem = {};
     console.log(this.myItems);   
  }

  constructor() { }

  ngOnInit(): void {
  	this.formulario = new FormGroup({
      name: new FormControl(null, Validators.required),
      house: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      patronus: new FormControl(null, Validators.required)
    });
  }

}
