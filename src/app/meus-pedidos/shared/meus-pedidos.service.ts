import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MeusPedidosService {
  pedidoRef: AngularFireList<any>;

  public static TIPO_ORACAO = {
    ACAO_DE_GRACAS: 1,
    PELA_SAUDE: 2,
    PELO_ANIVERSARIANTE: 3,
    FALECIMENTO: 4,
    OUTRA: 5
  };

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) {
    this.pedidoRef = this.db.list('meus-pedidos/')
  }



    // insert para inserir os dados do form no firebase
  inserirPedidos(usuario: any) {
    return this.pedidoRef.push(usuario);
  }

}
