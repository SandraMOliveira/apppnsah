import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { LojinhaPage } from './lojinha.page';
import { SharedModule } from '../core/shared/shared/shared.module';


const routes: Routes = [
  {
    path: ' ',
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
      },
    ]
  }
  // {
  //   path: 'usuarios',
  //   children: [
  //     {
  //       path: 'enderecos',
  //       loadChildren: '../enderecos/lista-endereco/lista-endereco.module#ListaEnderecoPageModule'
  //     },
  //     {
  //       path: 'enderecos/novo',
  //       loadChildren: '../enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule'
  //     },
  //     {
  //       path: 'enderecos/editar/:key',
  //       loadChildren: '../enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LojinhaPage]
})
export class LojinhaPageModule {}
