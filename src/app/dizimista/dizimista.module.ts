import { SharedModule } from './../core/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { DizimistaPage } from './dizimista.page';

const routes: Routes = [
  {
    path: '',
    component: DizimistaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DizimistaPage]
})
export class DizimistaPageModule {}
