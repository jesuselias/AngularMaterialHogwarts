import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { CasaEstudio } from '../../interfaces/casa';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  selectedValue: string = '';

  casas: CasaEstudio[] = [
    {value: '0', viewValue: 'Slytherin'},
    {value: '1', viewValue: 'Gryffindor'},
    {value: '2', viewValue: 'Ravenclaw '},
    {value: '3', viewValue: 'Hufflepuff'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
