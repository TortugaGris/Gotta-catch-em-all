import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../interfaces/IPokemon';
import { AuthService } from '../services/auth.service';
import { PokemonService } from '../services/pokemon.service'
import { PokemonCaptureService } from '../services/pokemon-capture.service';
import { IPokemonCapture } from '../interfaces/IPokemonCapture';
import { serverTimestamp } from 'firebase/firestore';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title = 'gotta-cath-em-all';
  currentPokemon: IPokemon = {id: 0, name: "", 
    sprites: {
      other: {
        "official-artwork": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/f301664fbbce6ccbe09f9561287e05653379f870/sprites/pokemon/0.png"
        }
      }
    }
  };

  constructor(
    public auth: AuthService,
    public pokemonService: PokemonService,
    public pokemonCaptureService: PokemonCaptureService) 
  { 
  }

  ngOnInit(): void {

  }


  capturePokemon(userId:string) {
    let pokemonCapture: IPokemonCapture = {
      userId: userId,
      pokemonId: this.currentPokemon.id,
      captureTime: serverTimestamp(),
      pokemonName: this.currentPokemon.name,
      pokemonType: this.currentPokemon.types,
      pokemonImageUrl: this.currentPokemon.sprites?.other['official-artwork'].front_default,
    }
    this.pokemonCaptureService.addPokemonCapture(pokemonCapture)
  }
}
