import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorGuard } from '../../guardianes/administrador.guard';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'crear',
    canActivate: [AdministradorGuard],
    component: CrearComponent
  },
  {
    path: 'actualizar/:id',
    component: CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
