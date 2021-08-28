import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(public http: HttpClient) { }

   getAllSlytherin(){
  	return this.http.get(`${apiUrl}/house/slytherin`);
   }

   getAlLGryffindor(){
    return this.http.get(`${apiUrl}/house/gryffindor`);	
   }

   getAllRavenclaw (){
    return this.http.get(`${apiUrl}/house/ravenclaw`);
   }

   getAllHufflepuff(){
    return this.http.get(`${apiUrl}/house/hufflepuff`);
   }
}
