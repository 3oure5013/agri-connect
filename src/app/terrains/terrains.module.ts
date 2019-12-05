import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TerrainsPage } from './terrains.page';
import { TerrainRoutingModule } from './terrain-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerrainRoutingModule
  ],
  declarations: [TerrainsPage]
})
export class TerrainsPageModule {}
