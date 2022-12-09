import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Reserva } from "../../../models/reserva.model";
import { ReservaService } from "../../../services/reserva.service";

@Component({
  selector: "ngx-crear",
  templateUrl: "./crear.component.html",
  styleUrls: ["./crear.component.scss"],
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_reserva: number = 0;
  
  laReserva:Reserva={
    "id_evento":0,
    "id_usuario":0
  }
  
  
  constructor(private rutaActiva: ActivatedRoute,
              private miServicioReserva:ReservaService,
              private router:Router) {}

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id) {
      this.modoCreacion = false;                   
      this.id_reserva = this.rutaActiva.snapshot.params.id;
      this.getReserva(this.id_reserva);
    } else {
      this.modoCreacion = true;
    }
    
  }
  
  
  getReserva(id:number){
    this.miServicioReserva.show(id).subscribe(data => {
      this.laReserva=data;
      
    });
  }
  crear(){
    this.miServicioReserva.create(this.laReserva)
          .subscribe(data => {
            Swal.fire(
              'Creado',
              'La reserva ha sido creado correctamente',
              'success'
            )
            this.router.navigate(['/pages/reservas/listar']);
        });
  }
  actualizar(){
    
    this.miServicioReserva.update(this.laReserva)
          .subscribe(data => {
            Swal.fire(
              'Actualizada',
              'La reserva ha sido actualizada correctamente',
              'success'
            )
            this.router.navigate(['/pages/reservas/listar']);
        })
  }
}

