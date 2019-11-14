import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MeusPedidosService {
  pedidoRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) {
    this.pedidoRef = this.db.list('meus-pedidos/')
  }

  inserirPedidos(usuario: any) {
    return this.pedidoRef.push(usuario);
  }

}
