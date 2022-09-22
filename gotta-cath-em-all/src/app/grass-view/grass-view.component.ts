import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service'
import { IPokemon } from '../interfaces/IPokemon';

@Component({
  selector: 'app-grass-view',
  templateUrl: './grass-view.component.html',
  styleUrls: ['./grass-view.component.scss']
})
export class GrassViewComponent implements OnInit {
  currentPokemon: IPokemon = {id: 0, name: "", 
    sprites: {
      other: {
        "official-artwork": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/f301664fbbce6ccbe09f9561287e05653379f870/sprites/pokemon/0.png"
        }
      }
    }
  };

  constructor(private pokemonService: PokemonService) {
    this.getPokemon()
  }

  ngOnInit(): void {
  }

  getPokemon() {
    this.pokemonService.getRandomPokemon()
        .subscribe(data => this.currentPokemon = data)
  }

}
