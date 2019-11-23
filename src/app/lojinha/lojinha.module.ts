import { SharedModule } from '../core/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LojinhaPage } from './lojinha.page';
import { LojinhaPageRoutingModule } from './lojinha-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LojinhaPageRoutingModule
  ],
  declarations: [LojinhaPage]
})
export class LojinhaPageModule {}
