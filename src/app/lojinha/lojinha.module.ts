import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LojinhaPage } from './lojinha.page';


const routes: Routes = [
  {
    path: '',
    component: LojinhaPage,
    children: [
      {
        path: 'produtos',
        loadChildren: '../produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule'
      },
      {
        path: 'pedidos',
        loadChildren: '../pedidos/lista-item-pedido/lista-item-pedido.module#ListaItemPedidoPageModule '
      },
      {
        path: 'usuarios',
        loadChildren: '../usuarios/login/login.module#LoginPageModule'
      },
      {
        path: '',
        redirectTo: '/lojinha/produtos',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LojinhaPage]
})
export class LojinhaPageModule {}
