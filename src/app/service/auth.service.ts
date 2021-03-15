import { Injectable } from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../utils/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { }

  async googleSignup() {
    const googleUser = await Plugins.GoogleAuth.signIn() as any;
    const credential = firebase.auth.GoogleAuthProvider.credential(
      googleUser.authentication.idToken
    );
    const afUser = await this.afAuth.signInWithCredential(credential);
    return this.updateData(afUser.user);
    // uid, displayName, photoURL, email
  }
  updateData(user): Promise<any> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    const data: User = {
      uid: user.uid,
      dname: user.displayName,
      gmail: user.email,
      photourl: user.photoURL,
      mode: 'gmail'
    };
    return userRef
    .set(data, { merge: true });
  }
  getUID() {
    return firebase.auth().currentUser.uid;
  }
  async signOut() {
    await firebase.auth().signOut();
    this.router.navigate(['/home']);
  }
}
