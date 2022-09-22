import { Type } from './IPokemon';
import { serverTimestamp, FieldValue } from 'firebase/firestore';

export interface IPokemonCapture {
  userId: string;
  pokemonId: number;
  captureTime?: typeof serverTimestamp | FieldValue;
  pokemonName: string;
  pokemonType?: Type[];
  pokemonImageUrl?: string;

}