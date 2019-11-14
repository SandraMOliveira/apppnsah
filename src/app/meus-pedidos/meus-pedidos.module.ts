import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MeusPedidosPage } from './meus-pedidos.page';
import { SharedModule } from '../core/shared/shared/shared.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

const routes: Routes = [
  {
    path: '',
    component: MeusPedidosPage
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
  declarations: [MeusPedidosPage]
})
export class MeusPedidosPageModule {}
