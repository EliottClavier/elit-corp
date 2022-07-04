import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public auth: Auth
  ) { }

  public async register({ email, password }) {
    try {
      return await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
    } catch (e) {
      return null;
    }
  }

  public async login({ email, password }) {
    try {
      return await signInWithEmailAndPassword(this.auth, email, password);;
    } catch (e) {
      return null;
    }
  }

  public logout() {
    return signOut(this.auth);
  }
}
