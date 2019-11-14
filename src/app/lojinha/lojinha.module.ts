import { SharedModule } from '../core/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LojinhaPageRoutingModule } from './lojinha-routing.module';

import { LojinhaPage } from './lojinha.page';

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
