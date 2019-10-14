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
        loadChildren: '../produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule'
      },
      {
        path: 'usuarios',
        loadChildren: '../produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule'
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
