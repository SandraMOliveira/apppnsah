import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OrarPage } from './orar.page';
import { SharedModule } from '../core/shared/shared/shared.module';

// const routes: Routes = [
//   {
//     path: '',
//     component: OrarPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: OrarPage }])
  ],
  declarations: [OrarPage]
})
export class OrarPageModule {}
