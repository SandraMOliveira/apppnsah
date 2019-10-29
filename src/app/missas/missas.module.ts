import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MissasPage } from './missas.page';
import { SharedModule } from '../core/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MissasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MissasPage]
})
export class MissasPageModule {}
