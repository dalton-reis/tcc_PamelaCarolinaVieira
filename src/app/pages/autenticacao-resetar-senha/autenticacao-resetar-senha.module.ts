import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutenticacaoResetarSenhaPage } from './autenticacao-resetar-senha.page';

const routes: Routes = [
  {
    path: '',
    component: AutenticacaoResetarSenhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AutenticacaoResetarSenhaPage]
})
export class AutenticacaoResetarSenhaPageModule {}
