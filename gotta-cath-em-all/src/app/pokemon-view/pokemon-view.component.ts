import { Component, OnInit, Input } from '@angular/core';
import { Types } from '../interfaces/IPokemon';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {
  @Input() pokemonName: string = "";
  @Input() sprite: string | undefined;
  @Input() types: Types[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
