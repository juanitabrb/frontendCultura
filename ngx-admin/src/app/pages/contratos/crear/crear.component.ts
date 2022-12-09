import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Contrato } from '../../../models/contrato.model';
import { ContratosService } from '../../../services/contratos.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_evento: number = 0;
  elEvento:Contrato={
    id_agrupacion:undefined,
    id_evento:undefined,
  }
  constructor(private rutaActiva: ActivatedRoute,
              private contratoService:ContratosService,
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
    this.contratoService.show(id).subscribe(data => {
      this.elEvento=data;
      console.log(this.elEvento)
    });
  }
  crear(){
    console.log("creando a"+JSON.stringify(this.elEvento))
    this.contratoService.create(this.elEvento)
          .subscribe(data => {
            Swal.fire(
              'Creado',
              'La contrato ha sido creado correctamente',
              'success'
            )
            this.router.navigate(['/pages/contratos/listar']);
        });
  }
  actualizar(){
    console.log("actualizando a"+JSON.stringify(this.elEvento))
    this.contratoService.update(this.elEvento)
          .subscribe(data => {
            Swal.fire(
              'Actualizado',
              'La contrato ha sido actualizado correctamente',
              'success'
            )
            this.router.navigate(['/pages/contratos/listar']);
        })
  }

}
