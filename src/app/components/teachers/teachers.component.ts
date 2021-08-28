import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TeachersService } from '../../services/teachers.service';
import { Persona } from '../../interfaces/persona';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'patronus', 'yearOfBirth', 'image'];
  dataSource: MatTableDataSource<Persona>;
  teacher: Persona[] = [];
  anio: number = 0;

  spiner = true;
 

  /*@ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  @ViewChild(MatSort) set MatSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }*/

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public teachersService: TeachersService) {
  
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.teacher);

  }

  obtenerProfesores(){
    this.spiner = true;
    this.teachersService.getAllTeacher()
      .subscribe( (resp:any) => {
        //console.log(resp);
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

  
  ngOnInit(): void {
    this.obtenerProfesores();
    this.anio = new Date().getFullYear();
  }

  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  getDefault(column: any): any {
     return column !== null ? column : '-';
  }

    

}




