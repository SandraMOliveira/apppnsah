import { LojinhaPage } from './lojinha.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: LojinhaPage,

    children: [
      {
        path: 'produtos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../produtos/lista-produtos/lista-produtos.module').then(m => m.ListaProdutosPageModule)
          }
        ]
      },
      {
        path: 'pedidos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pedidos/lista-pedido/lista-pedido.module').then(m => m.ListaPedidoPageModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../usuarios/perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/lojinha/produtos',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'usuarios',
    children: [
      {
        path: 'enderecos',
        loadChildren: '../enderecos/lista-endereco/lista-endereco.module#ListaEnderecoPageModule'
      },
      {
        path: 'enderecos/novo',
        loadChildren: '../enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule'
      },
      {
        path: 'enderecos/editar/:key',
        loadChildren: '../enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule'
      }
    ]
  },
  // criando rota para carrinho
  {
    path: 'pedido',
    children: [
      {
        path: 'carrinho/novo-item/:key',
        loadChildren: '../pedidos/form-item-pedido/form-item-pedido.module#FormItemPedidoPageModule'
      },
      // rota para lista de produtos no carrinho
      {
        path: 'carrinho',
        loadChildren: '../pedidos/lista-item-pedido/lista-item-pedido.module#ListaItemPedidoPageModule'
      },
      // rota para
      {
        path: 'forma-pagamento',
        loadChildren: '../pedidos/form-pagamento/form-pagamento.module#FormPagamentoPageModule'
      },
      {
        path: 'produtos/:key',
        loadChildren: '../pedidos/lista-produto-pedido/lista-produto-pedido.module#ListaProdutoPedidoPageModule'
      }
    ]
  },
  // se for vazio cai na primeira rota (tabs)
  {
    path: '',
    redirectTo: '/lojinha/produtos',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LojinhaPageRoutingModule { }