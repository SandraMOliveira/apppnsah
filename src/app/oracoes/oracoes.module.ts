import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

import { OracoesPage } from './oracoes.page';
import { SharedModule } from '../core/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
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
      }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OracoesPage]
})
export class OracoesPageModule {}
