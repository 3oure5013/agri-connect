import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PermisFoncierPage } from './permis-foncier.page';
import { PermisRoutingModule } from './permis-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermisRoutingModule
  ],
  declarations: [PermisFoncierPage]
})
export class PermisFoncierPageModule {}
