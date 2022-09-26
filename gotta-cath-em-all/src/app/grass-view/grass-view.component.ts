import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service'
import { IPokemon } from '../interfaces/IPokemon';
import { IPokemonCapture } from '../interfaces/IPokemonCapture';
import { serverTimestamp } from 'firebase/firestore';
import { PokemonCaptureService } from '../services/pokemon-capture.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grass-view',
  templateUrl: './grass-view.component.html',
  styleUrls: ['./grass-view.component.scss']
})
export class GrassViewComponent implements OnInit {
  uid="";
  userSubscription: Subscription;
  currentPokemon: IPokemon = {id: 0, name: "", 
    sprites: {
      other: {
        "official-artwork": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/f301664fbbce6ccbe09f9561287e05653379f870/sprites/pokemon/0.png"
        }
      }
    }
  };

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
    this.pokemonService.getRandomPokemon()
        .subscribe(data => this.currentPokemon = data)
  }

  /**
   * Add a new document to the captures collection if Pokeball landed on Pokemon.
   * Then get a new random Pokemon.
   * @param prob - True if Pokeball landed on Pokemon
   */
  capture(prob: boolean) {
    if (prob) {
      let pokemonCapture: IPokemonCapture = {
        userId: this.uid,
        pokemonId: this.currentPokemon.id,
        captureTime: serverTimestamp(),
        pokemonName: this.currentPokemon.name,
        pokemonType: this.currentPokemon.types,
        pokemonImageUrl: this.currentPokemon.sprites?.other['official-artwork'].front_default,
      }
      this.pokemonCaptureService.addPokemonCapture(pokemonCapture)
    }
    this.getPokemon();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
