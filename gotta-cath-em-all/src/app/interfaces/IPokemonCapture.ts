import { Types } from './IPokemon';
import { serverTimestamp, FieldValue, Timestamp } from 'firebase/firestore';

export interface IPokemonCapture {
  userId: string;
  pokemonId: number;
  captureTime?: typeof serverTimestamp | FieldValue | Timestamp;
  pokemonName: string;
  pokemonType?: Types[];
  pokemonImageUrl?: string | null;

}
