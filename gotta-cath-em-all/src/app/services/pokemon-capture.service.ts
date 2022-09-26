import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IPokemonCapture } from '../interfaces/IPokemonCapture';
import { ICaptureList } from '../interfaces/ICaptureList'

@Injectable({
  providedIn: 'root'
})
export class PokemonCaptureService {
  constructor(private db: AngularFirestore) {}

  /**
   * Add Pokemon to the captures collection
   */
  addPokemonCapture(pokemonCapture: IPokemonCapture) {
    this.db.collection('captures').add(pokemonCapture);
  }

  /**
   * Delete a Pokemon in the captures collection using the document ID
   * @param capturesId - Document ID
   */
  deletePokemonCapture(capturesId:string) {
    this.db.collection('captures').doc(capturesId).delete();
  }

  /**
   * Get list of Pokemons captured by the user
   * @param userId - User ID
   */
  getUserCaptures(userId:string) {
    return this.db.collection<ICaptureList>('captures',
                                               ref => ref.where('userId', '==', userId))
                                               .valueChanges({ idField: 'docId' });
  }
}
