import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ValorComponent } from '../valor/valor.component';

library.add(fas, far, fab);

@NgModule({
  declarations: [ValorComponent],
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
