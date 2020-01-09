import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class PockemonService {

  


  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get(`${config.apiUrl}/pokemons`)
  }

  getPokemonDetails(id : number){
    return this.http.get(`${config.apiUrl}/pokemons/${id}`);

  }
}
