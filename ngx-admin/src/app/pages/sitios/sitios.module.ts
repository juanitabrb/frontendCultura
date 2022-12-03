import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitiosRoutingModule } from './sitios-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    SitiosRoutingModule,
    FormsModule
  ]
})
export class SitiosModule { }
