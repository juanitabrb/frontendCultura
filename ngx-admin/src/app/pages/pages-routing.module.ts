import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AutenticacionGuard } from '../guardianes/autenticacion.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'eventos',
      loadChildren: () => import('./eventos/eventos.module')
        .then(m => m.EventosModule),
    },
    {
      path: 'usuarios',
      canActivate: [AutenticacionGuard],
      loadChildren: () => import('./usuarios/usuarios.module')
        .then(m => m.UsuariosModule)
    },
    {
      path: 'sitios',
      canActivate: [AutenticacionGuard],
      loadChildren: () => import('./sitios/sitios.module')
        .then(m => m.SitiosModule)
    },
    {
      path: 'seguridad',
      loadChildren: () => import('./seguridad/seguridad.module')
        .then(m => m.SeguridadModule)
    },
    {
      path: 'roles',
      canActivate: [AutenticacionGuard],
      loadChildren: () => import('./roles/roles.module')
        .then(m => m.RolesModule)
    },
    {
      path: 'categorias',
      canActivate: [AutenticacionGuard],
      loadChildren: () => import('./categorias/categorias.module')
        .then(m => m.CategoriasModule)
    },
    //routes for agrupaciones, managers, contratos, programaciones
    {
      path: 'agrupaciones',
      canActivate: [AutenticacionGuard],
      loadChildren: () => import('./agrupaciones/agrupaciones.module')
        .then(m => m.AgrupacionesModule)
    },
    {
      path: 'managers',
      canActivate: [AutenticacionGuard],
      loadChildren: () => import('./managers/managers.module')
        .then(m => m.ManagersModule)
    },
    {
      path: 'contratos',
      canActivate: [AutenticacionGuard],
      loadChildren: () => import('./contratos/contratos.module')
        .then(m => m.ContratosModule)

    },
    {
      path: 'programaciones',
      canActivate: [AutenticacionGuard],
      loadChildren: () => import('./programaciones/programaciones.module')
        .then(m => m.ProgramacionesModule)
    },
    {
      path: 'reservas',
      canActivate: [AutenticacionGuard],
      loadChildren: () => import('./reservas/reservas.module')
        .then(m => m.ReservasModule)
    },
    {
      path: '',
      redirectTo: 'eventos',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
