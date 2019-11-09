import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OracoesPage } from './oracoes.page';

const routes: Routes = [
  {
    path: '',
    component: OracoesPage,
    //criando tabs 
    children: [
      {
        path: 'orar',
        children: [
          {
            path: 'orar',
            loadChildren: () => import('../orar/orar.module').then(m => m.OrarPageModule)
            // loadChildren: '../orar/orar.module#OrarPageModule'
          }
        ]
      },
      {
        path: 'meus-pedidos',
        loadChildren: () => import('../meus-pedidos/meus-pedidos.module').then(m => m.MeusPedidosPageModule)
        // loadChildren: '../meus-pedidos/meus-pedidos.module#MeusPedidosPageModule'
      },
      {
        path: '',
        redirectTo: '/oracoes/orar',
        pathMatch: 'full'
      }

    ]
  } 
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OracoesPageRouterModule { }
