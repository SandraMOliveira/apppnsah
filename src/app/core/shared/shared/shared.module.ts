import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ValorComponent } from '../valor/valor.component';
import { ListaEnderecoPage } from 'src/app/enderecos/lista-endereco/lista-endereco.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

@NgModule({
  declarations: [ValorComponent, ListaEnderecoPage ],
  imports: [
    IonicModule,
    RouterModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ValorComponent,
    ReactiveFormsModule
  ],
  entryComponents: [ValorComponent]
})
export class SharedModule { }
