import { Component, OnInit, Input } from '@angular/core';
import { Types, Sprites} from '../interfaces/IPokemon';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {
  @Input() pokemonName: string = "";
  @Input() sprite: Sprites | undefined;
  @Input() types: Types[] | undefined;

  constructor() {}

  ngOnInit(): void {}


  /**
   * Get first sprite
   * @param sprites - Object of type Sprites with all the sprites available
   * @returns string with the url to the sprite
   */
  firstSprite(sprites: Sprites| undefined): string {
    if (sprites) {
      if (sprites.other['official-artwork'].front_default) {
        return sprites.other['official-artwork'].front_default
      } else {
        for(let val of Object.values(sprites)) {
          if (typeof(val) === 'string') {
            return val
          }
        }
        if(sprites.other.home) {
          for(let val of Object.values(sprites.other.home)) {
            if (typeof(val) === 'string') {
              return val
            }
          }
        }
        if(sprites.other.dream_world) {
          for(let val of Object.values(sprites.other.dream_world)) {
            if (typeof(val) === 'string') {
              return val
            }
          }
        }
      }
    }
    return ""
  }

}
