import {Component} from '@angular/core';
import {PokemonService} from '../services/pokemon.service'
import {IPokemon} from '../interfaces/IPokemon';
import {IPokemonCapture} from '../interfaces/IPokemonCapture';
import {serverTimestamp} from 'firebase/firestore';
import {PokemonCaptureService} from '../services/pokemon-capture.service';
import {AuthService} from '../services/auth.service';
import {Observable, of} from 'rxjs';
import {User} from "../services/user.model";

@Component({
  selector: 'app-grass-view',
  templateUrl: './grass-view.component.html',
  styleUrls: ['./grass-view.component.scss']
})
export class GrassViewComponent {
  user$: Observable<User | null> = this.auth.getUser();
  currentPokemon$: Observable<IPokemon | null> = of(null);

  constructor(private pokemonService: PokemonService,
              private pokemonCaptureService: PokemonCaptureService,
              private auth: AuthService) {
    this.getPokemon()
  }

  /**
   * Get a random pokemon using the pokemonService
   */
  getPokemon() {
    this.currentPokemon$ = this.pokemonService.getRandomPokemon();
  }

  /**
   * Add a new document to the captures collection if Pokeball landed on Pokemon.
   * Then get a new random Pokemon.
   * @param prob - True if Pokeball landed on Pokemon
   * @param pokemon - The Pokemon that was captured
   * @param user - The user that captured the Pokemon
   */
  capture(prob: boolean, pokemon: IPokemon, user: User) {
    if (prob) {
      let pokemonCapture: IPokemonCapture = {
        userId: user.uid,
        pokemonId: pokemon.id,
        captureTime: serverTimestamp(),
        pokemonName: pokemon.name,
        pokemonType: pokemon.types,
        pokemonImageUrl: pokemon.sprites?.other['official-artwork'].front_default,
      }
      this.pokemonCaptureService.addPokemonCapture(pokemonCapture)
    }
    this.getPokemon();
  }
}
