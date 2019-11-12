import { LojinhaPage } from './lojinha.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'lojinha',
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

        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LojinhaPageRoutingModule {}