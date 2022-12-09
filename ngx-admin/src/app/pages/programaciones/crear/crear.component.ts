import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Programacion } from '../../../models/programacion.model';
import { ProgramacionService } from '../../../services/programacion.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_sitio: number = 0;
  elSitio:Programacion={
    "descripcion":"",
    "foto":"",
    "id_evento":undefined
  }
  constructor(private rutaActiva: ActivatedRoute,
              private programacionService:ProgramacionService,
              private router:Router) {}

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id) {
      this.modoCreacion = false;
      this.id_sitio = this.rutaActiva.snapshot.params.id;
      this.getUsuario(this.id_sitio);
    } else {
      this.modoCreacion = true;
    }
  }
  getUsuario(id:number){
    this.programacionService.show(id).subscribe(data => {
      this.elSitio=data;
      console.log(this.elSitio)
    });
  }
  crear(){
    console.log("creando a"+JSON.stringify(this.elSitio))
    this.programacionService.create(this.elSitio)
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
    console.log("actualizando a"+JSON.stringify(this.elSitio))
    this.programacionService.update(this.elSitio)
          .subscribe(data => {
            Swal.fire(
              'Actualizado',
              'La programacion ha sido actualizado correctamente',
              'success'
            )
            this.router.navigate(['/pages/programaciones/listar']);
        })
  }

}
