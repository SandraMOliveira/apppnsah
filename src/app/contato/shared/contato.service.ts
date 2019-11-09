import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  contatoRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) {
                this.contatoRef = this.db.list('contato/')
               }

  inserir(usuario: any) {
    return this.contatoRef.push(usuario);
  }
}
