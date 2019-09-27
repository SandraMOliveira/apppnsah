import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { 
    path: 'comunidades', 
    loadChildren: './comunidades/comunidades.module#ComunidadesPageModule' 
  },
  { path: 'paroquia', loadChildren: './paroquia/paroquia.module#ParoquiaPageModule' },
  { path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasPageModule' },
  { path: 'oracoes', loadChildren: './oracoes/oracoes.module#OracoesPageModule' },
  { path: 'missas', loadChildren: './missas/missas.module#MissasPageModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule' },
  { path: 'lojinha', loadChildren: './lojinha/lojinha.module#LojinhaPageModule' },
  { path: 'dizimista', loadChildren: './dizimista/dizimista.module#DizimistaPageModule' },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
