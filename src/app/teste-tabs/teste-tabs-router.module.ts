import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteTabsPage } from './teste-tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TesteTabsPage,

        children: [
            {
                path: 'loja',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                        import('../loja/loja.module').then(m => m.LojaPageModule)
                    }
                ]
            },
            {
                path: 'livros',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                        import('../livros/livros.module').then(m => m.LivrosPageModule)
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

  export class TesteTabsPageRouterModule {}