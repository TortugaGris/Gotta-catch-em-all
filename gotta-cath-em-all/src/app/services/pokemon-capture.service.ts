import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IPokemonCapture } from '../interfaces/IPokemonCapture';

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

  // getUserCaptures(userId:string) {
  //   console.log(userId);
  //   return this.db.collection<IPokemonCapture>('captures',
  //                                              ref => ref.where('userId', '==', userId))
  //                                              .valueChanges();
  // }
}
