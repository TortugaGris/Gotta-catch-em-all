import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PokemonService } from './services/pokemon.service'
import { IPokemon } from './services/IPokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gotta-cath-em-all';
  currentPokemon: IPokemon = {id: 0, name: ""};
  
  constructor(
    public auth: AuthService,
    public pokemon: PokemonService) { 
    }

  getPokemon() {
    this.pokemon.getRandomPokemon().subscribe(data => this.currentPokemon = data)
  }
}
