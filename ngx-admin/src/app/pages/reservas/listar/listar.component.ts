import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { Usuario } from "../../../models/usuario.model";
import { UsuarioService } from "../../../services/usuario.service";
import { Router } from '@angular/router';
import { Reserva } from '../../../models/reserva.model';
import { ReservaService } from "../../../services/reserva.service";

@Component({
  selector: "ngx-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.scss"],
})
export class ListarComponent implements OnInit {
  columnas: string[] = ["ID", "id_usuario", "id_evento", "fecha"];
  misReservas: Reserva[];
  constructor(private miServicioReserva: ReservaService, private router:Router) {
    
  }

  ngOnInit(): void {
    this.listarReservas();
  }

  listarReservas(): void {
    this.miServicioReserva.index().subscribe((data) => {
      this.misReservas = data;
      console.log(data);
    });
  }


  eliminar(id: number): void {
    Swal.fire({
      title: "Eliminar Reserva",
      text: "Está seguro que quiere eliminar la reserva?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioReserva.destroy(id).subscribe((data) => {
          Swal.fire(
            "Eliminado!",
            "La reserva ha sido eliminada correctamente",
            "success"
          );
          this.ngOnInit();
        });
      }
    });
  }
  actualizar(id: number): void {
    this.router.navigate(['/pages/reservas/actualizar/'+id]);
  }

  crear(): void {
    this.router.navigate(['/pages/reservas/crear']);
  }
}
