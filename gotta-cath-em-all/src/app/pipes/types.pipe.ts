import { Pipe, PipeTransform } from '@angular/core';
import { Types } from '../interfaces/IPokemon';

@Pipe({
  name: 'types'
})
export class TypesPipe implements PipeTransform {

  /**
   * Transfrom a list of types in a string where the types are in upper case 
   * and separated by a dash
   * @param value - List of types
   */
  transform(value: Types[] | undefined): string {
    let str = "";
    if (value){
      value.forEach(type => {
        str = str + type.type.name + " - ";
      })
      return str.toUpperCase().slice(0,-3);
    } else {
      return "";
    }
  }

}
