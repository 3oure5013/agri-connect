import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisFoncierPage } from './permis-foncier.page';

const routes: Routes = [
    {
        path: 'permis',
        component: PermisFoncierPage,
        children: [
            {
                path: 'nouveau',
                loadChildren : './nouveau-permis/nouveau-permis.module#NouveauPermisPageModule'
            },
            {
                path: ':permisId',
                loadChildren : './permis-detail/permis-detail.module#PermisDetailPageModule'
            },
            {
                path: 'edit/:permisId',
                loadChildren : './edit-permis/edit-permis.module#EditPermisPageModule'
            },
            {
                path: '',
                redirectTo: 'permis',
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

export class PermisRoutingModule {

}