import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerrainsPage } from './terrains.page';

const routes: Routes = [
    {
        path: 'terrain',
        component: TerrainsPage,
        children: [
            {
                path: 'acheter/:terrainId',
                loadChildren : './acheter-terrain/acheter-terrain.module#AcheterTerrainPageModule'
            },
            {
                path: 'detail/terrainId',
                loadChildren : './detail-terrain/detail-terrain.module#DetailTerrainPageModule'
            },
            {
                path: 'edit/:terrainId',
                loadChildren : './edit-terrain/edit-terrain.module#EditTerrainPageModule'
            },
            {
                path: 'ajouter',
                loadChildren : './ajouter-terrain/ajouter-terrain.module#AjouterTerrainPageModule'
            },
            {
                path: 'location/terrainId',
                loadChildren : './location-terrain/location-terrain.module#LocationTerrainPageModule'
            },
            {
                path: '',
                redirectTo: 'terrain',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TerrainRoutingModule {

}