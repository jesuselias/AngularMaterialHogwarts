import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/interfaces/student'
import { Router } from '@angular/router';
import { Subscription  } from 'rxjs/internal/Subscription'; 
// import { EventEmitter } from 'stream';

export interface FileUploadModel {
    data: File;
    state: string;
    inProgress: boolean;
    progress: number;
    CanRetry: boolean;
    canCancel: boolean
    sub?:Subscription;  
  }


@Component({
  selector: 'app-addStudent',
  templateUrl: './addStudent.component.html',
  styleUrls: ['./addStudent.component.css']
})
export class AddStudentComponent implements OnInit {

  // @Input() text = 'Upload';
  // @Input() param = 'file';
  // @Input() target = 'https://file.io';
  // @Input() accept = 'text/*'

  // @Output() complete = new EventEmitter<string>();
  // fileInformation: any;
  // private files: Array<FileUploadModel> = []

  form: FormGroup;
  myItems: Student[] = new Array();
  newItem: any = {};

  constructor(private router: Router,private fb: FormBuilder, private _studentService: StudentService) { 
    this.form = this.fb.group({
      name: ["",Validators.required],
      patronus:["",Validators.required],
      age:["",Validators.required],
      image: ["",Validators.required],
    })
  }

  // onClick() {
  //   const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;

  //   fileUpload.onchange = () => {
  //     for (let index = 0; index < fileUpload.files.length; index++) {
  //       const file = fileUpload.files[index];
  //       this.files.push({
  //         data:file,
  //         state: 'in',
  //         inProgress:false,
  //         progress:0,
  //         canRetry:false,
  //         camCancel:true
  //       });
  //     }
  //     this.uploadFiles()
  //   }
  //   fileUpload.click()
  // }

  AddItem() { 
    console.log(this.form)
    const student: Student = {
      name:this.form.value.name,
      patronus:this.form.value.patronus,
      age:this.form.value.age,
      image:this.form.value.image,

    }


    this._studentService.addStudent(student);
    console.log(student)

    this.router.navigateByUrl('/studentsNew');
  }

  ngOnInit(): void {
  	this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      patronus: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      // image: new FormControl(null, Validators.required),
    });
  }

}
