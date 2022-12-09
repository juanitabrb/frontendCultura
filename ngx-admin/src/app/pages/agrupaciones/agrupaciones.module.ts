import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgrupacionesRoutingModule } from './agrupaciones-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    AgrupacionesRoutingModule
  ]
})
export class AgrupacionesModule { }
