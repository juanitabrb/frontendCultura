import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgrupacionesRoutingModule } from './agrupaciones-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    AgrupacionesRoutingModule
  ]
})
export class AgrupacionesModule { }
