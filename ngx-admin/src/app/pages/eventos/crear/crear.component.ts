import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Evento } from '../../../models/evento.model';
import { EventoService } from '../../../services/evento.service';
import { ProgramacionService } from '../../../services/programacion.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_evento: number = 0;
  elEvento:Evento={
    nombre:"",
    descripcion:"",
    fecha:undefined,
    id_categoria:undefined,
    id_sitio:undefined
  }
  constructor(private rutaActiva: ActivatedRoute,
              private eventoService:EventoService,
              private router:Router) {}

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id) {
      this.modoCreacion = false;
      this.id_evento = this.rutaActiva.snapshot.params.id;
      this.getUsuario(this.id_evento);
    } else {
      this.modoCreacion = true;
    }
  }
  getUsuario(id:number){
    this.eventoService.show(id).subscribe(data => {
      this.elEvento=data;
      console.log(this.elEvento)
    });
  }
  crear(){
    console.log("creando a"+JSON.stringify(this.elEvento))
    this.eventoService.create(this.elEvento)
          .subscribe(data => {
            Swal.fire(
              'Creado',
              'La programacion ha sido creado correctamente',
              'success'
            )
            this.router.navigate(['/pages/programaciones/listar']);
        });
  }
  actualizar(){
    console.log("actualizando a"+JSON.stringify(this.elEvento))
    this.eventoService.update(this.elEvento)
          .subscribe(data => {
            Swal.fire(
              'Actualizado',
              'La programacion ha sido actualizado correctamente',
              'success'
            )
            this.router.navigate(['/pages/eventos/listar']);
        })
  }

}
