import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },  {
    path: 'listados',
    loadChildren: () => import('./pacientes/listados/listados.module').then( m => m.ListadosPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./pacientes/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./pacientes/detalles/detalles.module').then( m => m.DetallesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
