import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Sitio } from "../../../models/sitio.model";
import { SitiosService } from "../../../services/sitios.service";
@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_sitio: number = 0;
  elSitio:Sitio={
    "id":0,
    "nombre":"",
    "direccion":"",
    "capacidad":0,
  }
  constructor(private rutaActiva: ActivatedRoute,
              private sitiosService:SitiosService,
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
    this.sitiosService.show(id).subscribe(data => {
      this.elSitio=data;
      console.log(this.elSitio)
    });
  }
  crear(){
    console.log("creando a"+JSON.stringify(this.elSitio))
    this.sitiosService.create(this.elSitio)
          .subscribe(data => {
            Swal.fire(
              'Creado',
              'El usuario ha sido creado correctamente',
              'success'
            )
            this.router.navigate(['/pages/usuarios/listar']);
        });
  }
  actualizar(){
    console.log("actualizando a"+JSON.stringify(this.elSitio))
    this.sitiosService.update(this.elSitio)
          .subscribe(data => {
            Swal.fire(
              'Actualizado',
              'El usuario ha sido actualizado correctamente',
              'success'
            )
            this.router.navigate(['/pages/usuarios/listar']);
        })
  }

}
