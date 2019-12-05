import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NouveauPermisPage } from './nouveau-permis.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauPermisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NouveauPermisPage]
})
export class NouveauPermisPageModule {}
