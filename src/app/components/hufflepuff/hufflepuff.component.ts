import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CharactersService } from '../../services/characters.service';
import { Casa } from '../../interfaces/casa';


@Component({
  selector: 'app-hufflepuff',
  templateUrl: './hufflepuff.component.html',
  styleUrls: ['./hufflepuff.component.css']
})
export class HufflepuffComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'patronus', 'yearOfBirth', 'image'];
  dataSource: MatTableDataSource<Casa>;
  casa: Casa[] = [];
  anio: number = 0;

  spiner = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public charactersService: CharactersService) { 
  	this.dataSource = new MatTableDataSource(this.casa);
  }

  ngOnInit(): void {
  	this.obtenerCasa();
  	this.anio = new Date().getFullYear();
  }

  obtenerCasa(){
    this.spiner = true;
    this.charactersService.getAllHufflepuff()
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


  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
