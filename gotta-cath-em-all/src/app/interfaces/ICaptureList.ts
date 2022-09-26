import { Types } from './IPokemon';
import { Timestamp } from 'firebase/firestore';

export interface ICaptureList {
  docId: string;
  userId: string;
  pokemonId: number;
  captureTime: Timestamp;
  pokemonName: string;
  pokemonType: Types[];
  pokemonImageUrl: string;

}
