import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../../services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddStudentComponent } from '../addStudent/addStudent.component';
import { Persona } from '../../interfaces/persona';
import { Student } from '../../interfaces/persona';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, AfterViewInit {

  listStudent: Student[] = []

  displayedColumns: string[] = ['name', 'patronus', 'yearOfBirth', 'image'];
  dataSource: MatTableDataSource<Persona>;
  student: Persona[] = [];
  anio: number = 0;

  spiner = true;

  @Input() myItem: string;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router,public studentService: StudentService, public dialog: MatDialog) {
  	this.dataSource = new MatTableDataSource(this.student);


  }

  ngOnInit(): void {
  	this.obtenerEstudiantes();
  	this.anio = new Date().getFullYear();
  }

  solicitud () {
    this.router.navigateByUrl('/studentsNew');
};

  openDialog() {
    this.dialog.open(AddStudentComponent);

  }

  obtenerEstudiantes(){
    this.spiner = true;
    this.studentService.getAllStudent()
      .subscribe( (resp:any) => {
        console.log(resp);
        this.dataSource.data = resp;
        this.spiner = false;
               
      })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
