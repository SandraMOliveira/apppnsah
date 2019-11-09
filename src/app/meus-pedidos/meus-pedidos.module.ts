import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MeusPedidosPage } from './meus-pedidos.page';
import { SharedModule } from '../core/shared/shared/shared.module';

// const routes: Routes = [
//   {
//     path: '',
//     component: MeusPedidosPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: MeusPedidosPage }])
  ],
  declarations: [MeusPedidosPage]
})
export class MeusPedidosPageModule {}
