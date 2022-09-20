import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../services/IPokemon';
import { AuthService } from '../services/auth.service';
import { PokemonService } from '../services/pokemon.service'
import { PokemonCaptureService } from '../services/pokemon-capture.service';
import { IPokemonCapture } from '../services/IPokemonCapture';
import { serverTimestamp } from 'firebase/firestore';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title = 'gotta-cath-em-all';
  currentPokemon: IPokemon = {id: 0, name: ""};

  constructor(
    public auth: AuthService,
    public pokemonService: PokemonService,
    public pokemonCaptureService: PokemonCaptureService) 
  { 
    this.getPokemon()
  }

  ngOnInit(): void {

  }

  getPokemon() {
    this.pokemonService.getRandomPokemon()
        .subscribe(data => this.currentPokemon = data)
  }

  capturePokemon(userId:string) {
    let pokemonCapture: IPokemonCapture = {
      userId: userId,
      pokemonId: this.currentPokemon.id,
      captureTime: serverTimestamp(),
      pokemonName: this.currentPokemon.name,
      pokemonType: this.currentPokemon.types,
      pokemonImageUrl: this.currentPokemon.sprites?.front_default,
    }
    this.pokemonCaptureService.addPokemonCapture(pokemonCapture)
  }
}