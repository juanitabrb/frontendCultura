import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule
  ]
})
export class UsuariosModule { }
