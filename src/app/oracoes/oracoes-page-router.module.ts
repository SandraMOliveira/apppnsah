import { OrarPage } from './../orar/orar.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
            component: OrarPage,
          },
          {
            path: 'orar',
            loadChildren: '../orar/orar.module#OrarPageModule'
          }
        ]
      },
      {
        path: 'meus-pedidos',
        loadChildren: '../meus-pedidos/meus-pedidos.module#MeusPedidosPageModule'
      },
      {
        path: '',
        redirectTo: '/app/oracoes/orar',
        pathMatch: 'full'
      }

    ]
  } 
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OracoesPageRouterModule { }
