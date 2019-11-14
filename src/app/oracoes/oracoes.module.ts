// import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { SharedModule } from '../core/shared/shared/shared.module';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

import { OracoesPage } from './oracoes.page';
import { OracoesPageRoutingModule } from './oracoes-routing.module';

@NgModule({
  imports: [
    // IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    FontAwesomeModule,
    OracoesPageRoutingModule

  ],
  declarations: [OracoesPage]
})
export class OracoesPageModule {}
