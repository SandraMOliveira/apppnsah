import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OracoesPage } from './oracoes.page';

const routes: Routes = [
  {
    path: 'oracoes',
    component: OracoesPage,
    //criando tabs 
    children: [
      {
        path: 'orar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../orar/orar.module').then(m => m.OrarPageModule)
            // loadChildren: '../orar/orar.module#OrarPageModule'
          }
        ]
      },
      {
        path: 'meus-pedidos',
        children : [
          {
            path: '',
            loadChildren: () =>
              import('../meus-pedidos/meus-pedidos.module').then(m => m.MeusPedidosPageModule)          
            }
        ]
      },
      // {
      //   path: '',
      //   redirectTo: '/oracoes/orar',
      //   pathMatch: 'full'
      // }
    ]
  },
  {
    path: '',
    redirectTo: '/oracoes/orar',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OracoesPageRoutingModule { }
