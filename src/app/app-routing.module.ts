import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  { path: 'splash-screen', loadChildren: './splash-screen/splash-screen.module#SplashScreenPageModule' },
  
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule'},

  { path: 'home', loadChildren: './home/home.module#HomePageModule' },

  { path: 'permis', loadChildren: './permis-foncier/permis-foncier.module#PermisFoncierPageModule', canLoad: [AuthGuard]},
 
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
