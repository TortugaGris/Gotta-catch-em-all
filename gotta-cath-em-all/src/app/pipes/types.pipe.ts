import { Pipe, PipeTransform } from '@angular/core';
import { Types } from '../interfaces/IPokemon';

@Pipe({
  name: 'types'
})
export class TypesPipe implements PipeTransform {

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
