import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcheterTerrainPage } from './acheter-terrain.page';

const routes: Routes = [
  {
    path: '',
    component: AcheterTerrainPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcheterTerrainPage]
})
export class AcheterTerrainPageModule {}
