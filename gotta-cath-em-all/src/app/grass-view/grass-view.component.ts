import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service'
import { IPokemon } from '../interfaces/IPokemon';
import { IPokemonCapture } from '../interfaces/IPokemonCapture';
import { serverTimestamp } from 'firebase/firestore';
import { PokemonCaptureService } from '../services/pokemon-capture.service';
import { AuthService } from '../services/auth.service';
import {Observable, of, Subscription} from 'rxjs';

@Component({
  selector: 'app-grass-view',
  templateUrl: './grass-view.component.html',
  styleUrls: ['./grass-view.component.scss']
})
export class GrassViewComponent implements OnInit {
  uid="";
  userSubscription: Subscription;
  currentPokemon$: Observable<IPokemon | null> = of(null);

  constructor(private pokemonService: PokemonService,
              private  pokemonCaptureService: PokemonCaptureService,
              private auth: AuthService) {
    this.getPokemon()
    this.userSubscription = this.auth.getUser().subscribe(
      user => {if(user) this.uid = user.uid},
      err => console.error(err))
  }

  ngOnInit(): void {}

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
   */
  capture(prob: boolean, pokemon: IPokemon) {
    if (prob) {
      let pokemonCapture: IPokemonCapture = {
        userId: this.uid,
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

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
