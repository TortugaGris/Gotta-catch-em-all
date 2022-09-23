import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PokemonService } from '../services/pokemon.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title = 'gotta-cath-em-all';

  constructor(public auth: AuthService,
              public pokemonService: PokemonService) {}

  ngOnInit(): void {}


}
