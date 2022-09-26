import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName'
})
export class PokemonNamePipe implements PipeTransform {

  /**
   * Transform Pokemon name where each word is separated by a dash to a string
   * where words are separated by a space and the first letter of each word is 
   * capitalized
   * @param value - Pokemon name
   */
  transform(value: string): string{   
    if (value != ""){
      let words = value.split('-');
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
      return words.join(' ');
    }
    return ""
  }

}
