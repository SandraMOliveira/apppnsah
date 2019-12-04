import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasPage } from './noticias.page';
import { SharedModule } from '../core/shared/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas, far, fab)

const routes: Routes = [
  {
    path: '',
    component: NoticiasPage
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
  declarations: [NoticiasPage]
})
export class NoticiasPageModule {}
