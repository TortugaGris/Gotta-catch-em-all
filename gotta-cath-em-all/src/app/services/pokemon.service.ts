import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, switchMap} from 'rxjs';
import {IPokemonList} from '../interfaces/IPokemonList';
import {IPokemon} from '../interfaces/IPokemon';


@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private _url: string = "https://pokeapi.co/api/v2/pokemon";

  private watchPokemonList(): Observable<IPokemonList> {
    return this.http.get<IPokemonList>(this._url + '?limit=10000&offset=0');
  }

  constructor(private http: HttpClient) {
  }

  /**
   * Get a random pokemon from the pokemons available at pokeapi
   * @returns Observable of the pokemon's information
   */
  getRandomPokemon(): Observable<IPokemon> {
    return this.watchPokemonList().pipe(
      switchMap(pokemonList => {
        let randomIndex = Math.floor(Math.random() * pokemonList.count);
        let url = pokemonList.results[randomIndex].url
        return this.http.get<IPokemon>(url);
      })
    )
  }
}
