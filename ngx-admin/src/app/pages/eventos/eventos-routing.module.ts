import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from '../../guardianes/autenticacion.guard';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'crear',

    canActivate: [AutenticacionGuard],
    component: CrearComponent
  },
  {
    path: 'actualizar/:id',

    canActivate: [AutenticacionGuard],
    component: CrearComponent
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
