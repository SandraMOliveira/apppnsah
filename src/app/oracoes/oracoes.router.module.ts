import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OracoesPage } from './oracoes.page';

const routes: Routes = [
  {
    path: 'oracoes',
    component: OracoesPage,
    //criando tabs 
    children: [
      {
        path: 'orar',
        loadChildren: '../orar/orar.module#OrarPageModule'
      },
      {
        path: 'meus-pedidos',
        loadChildren: '../meus-pedidos/meus-pedidos.module#MeusPedidosPageModule'
      },
      {
        path: '',
        redirectTo: '/orar',
        pathMatch: 'full'
      }

    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OracoesPageRoutingModule {}
