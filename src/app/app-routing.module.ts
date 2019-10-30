import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'comunidades', loadChildren: './comunidades/comunidades.module#ComunidadesPageModule' },
  { path: 'paroquia', loadChildren: './paroquia/paroquia.module#ParoquiaPageModule' },
  { path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasPageModule' },
  { path: 'oracoes', loadChildren: './oracoes/oracoes.module#OracoesPageModule' },
  { path: 'missas', loadChildren: './missas/missas.module#MissasPageModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule' },
  { path: 'lojinha', loadChildren: './lojinha/lojinha.module#LojinhaPageModule' },
  // {
  //   path: 'lojinha',
  //   loadChildren: () => import('./lojinha/lojinha.module').then(m => m.LojinhaPageModule)
  // },

  { path: 'dizimista', loadChildren: './dizimista/dizimista.module#DizimistaPageModule' },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'lista-produtos', loadChildren: './produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule' },
  { path: 'form-endereco', loadChildren: './enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule' },
  { path: 'lista-endereco', loadChildren: './enderecos/lista-endereco/lista-endereco.module#ListaEnderecoPageModule' },
  { path: 'form-item-pedido', loadChildren: './pedidos/form-item-pedido/form-item-pedido.module#FormItemPedidoPageModule' },
  { path: 'lista-item-pedido', loadChildren: './pedidos/lista-item-pedido/lista-item-pedido.module#ListaItemPedidoPageModule' },

  { path: 'lista-produto-pedido', loadChildren: './pedidos/lista-produto-pedido/lista-produto-pedido.module#ListaProdutoPedidoPageModule' },
  { path: 'perfil', loadChildren: './usuarios/perfil/perfil.module#PerfilPageModule' },
  { path: 'criar-conta', loadChildren: './usuarios/criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'esqueci-senha', loadChildren: './usuarios/esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' },
  { path: 'login', loadChildren: './usuarios/login/login.module#LoginPageModule' },
  { path: 'orar', loadChildren: './orar/orar.module#OrarPageModule' },
  { path: 'meus-pedidos', loadChildren: './meus-pedidos/meus-pedidos.module#MeusPedidosPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
