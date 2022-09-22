import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemonList } from '../interfaces/IPokemonList';
import { IPokemon } from '../interfaces/IPokemon';


@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private _url: string = "https://pokeapi.co/api/v2/pokemon"
  private pokemonList: IPokemonList = {count: 1, results: [{url: this._url + '/1'}]};

  constructor(private http:HttpClient) { 
    let pokemon$ = this.http.get<IPokemonList>(this._url + '?limit=10000&offset=0');
    pokemon$.subscribe(data => this.pokemonList = data)
  }
  
  /**
   * Get a random pokemon from the pokemons available at pokeapi
   * @returns Observable of the pokemon's information
   */
  getRandomPokemon(): Observable<IPokemon>{
    let randomIndex = Math.floor(Math.random() * this.pokemonList.count);
    let url = this.pokemonList.results[randomIndex].url
    return this.http.get<IPokemon>(url);
  }
}
