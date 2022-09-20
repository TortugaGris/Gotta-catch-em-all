import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

import firebase from 'firebase/compat/app';
import { UserInfo as FirebaseUser } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$: Observable<User | null | undefined>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          //Logged in
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
  }

  /**
   * Get an observable of the auth state (login or logout),
   * then fetch the Firestore user document or return null
   * @returns Observable to user document
   */
  getUser() {
    return this.user$
  }
  
  /**
   * Sign in with pop up window, using google authentication and update user 
   * document with google credentials.
   */
  async googleSignIn () {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    if (credential.user) return this.updateUserData(credential.user);
    else return null;
  }

  /**
   * Update user document using firebase's user credential
   * @param user - Firebase's user credentials
   */
  private updateUserData(user: FirebaseUser) {
    // Reference to the user document
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    // Update user document with google information
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data, { merge: true });
  }
  
  /**
   * Signs out the current user and return to a safe route
   */
  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }
}
