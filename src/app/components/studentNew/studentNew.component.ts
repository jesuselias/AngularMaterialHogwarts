import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../../services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from '../addStudent/addStudent.component';
import { Persona } from '../../interfaces/persona';
import { Student } from '../../interfaces/student';

@Component({
  selector: 'app-studentNew',
  templateUrl: './studentNew.component.html',
  styleUrls: ['./studentNew.component.css']
})
export class StudentNewComponent implements OnInit, AfterViewInit {

  liststudentNew: Student[] = []



  displayedColumnsLocal: string[] = ['name', 'patronus', 'age', 'image'];
  dataSourceLocal: MatTableDataSource<any>;
  studentNewLocal: Student[] = [];
  anioLocal: number = 0;

  spiner = true;

  @Input() myItem: string;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public StudentService: StudentService, public dialog: MatDialog) {

    this.dataSourceLocal = new MatTableDataSource(this.studentNewLocal);


  }

  ngOnInit(): void {
  
    this.getNewstudentNew();
  }


  openDialog() {
    this.dialog.open(AddStudentComponent);

  }

  getNewstudentNew(){
    this.liststudentNew = this.StudentService.getStudent();
    this.dataSourceLocal = new MatTableDataSource(this.liststudentNew)
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceLocal.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceLocal.paginator) {
      this.dataSourceLocal.paginator.firstPage();
    }
  }


  ngAfterViewInit() {
    
    this.dataSourceLocal.paginator = this.paginator;
    this.dataSourceLocal.sort = this.sort;
  }

}
