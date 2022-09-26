import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IPokemonCapture } from '../interfaces/IPokemonCapture';
import { ICaptureList } from '../interfaces/ICaptureList'

@Injectable({
  providedIn: 'root'
})
export class PokemonCaptureService {
  constructor(private db: AngularFirestore) {}

  addPokemonCapture(pokemonCapture: IPokemonCapture) {
    this.db.collection('captures').add(pokemonCapture);
  }

  deletePokemonCapture(capturesId:string) {
    this.db.collection('captures').doc(capturesId).delete();
  }

  getUserCaptures(userId:string) {
    return this.db.collection<ICaptureList>('captures',
                                               ref => ref.where('userId', '==', userId))
                                               .valueChanges({ idField: 'docId' });
  }
}
