export interface Persona {
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: Date;
  yearOfBirth: number;
  ancestry: string;
  hairColour: string;
  wand: Wand[];
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alive: boolean;
  image: string;
}

export interface Wand {
  wood: string;
  core: string;
  length: number;
}

export interface Student {
  name: string;
  house: string;
  age:number;
  patronus: string;  
}