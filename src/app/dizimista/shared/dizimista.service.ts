import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DizimistaService {
  dizimistaRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) { }

  criarCadastro(usuario: any) {
    return this.dizimistaRef.push(usuario);
  }
}
