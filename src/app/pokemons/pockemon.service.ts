import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PockemonService {

  
  private baseUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons';


  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get(`${this.baseUrl}`)
  }

  getPokemonDetails(id : number){
    return this.http.get(`${this.baseUrl}/${id}`);

  }
}
