import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Evento } from '../../../models/evento.model';
import { EventoService } from '../../../services/evento.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  columnas: string[] = ["ID", "Nombre", "Descripcion", "Fecha",  "Categoria", "Sitio", "Acciones"];
  misSitios: Evento[];

  constructor(private eventoService: EventoService, private router:Router) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.eventoService.index().subscribe((data) => {
      this.misSitios = data;
      console.log(data);
    });
  }

  eliminar(id: number): void {
    Swal.fire({
      title: "Eliminar Usuario",
      text: "Está seguro que quiere eliminar el evento?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventoService.destroy(id).subscribe((data) => {
          Swal.fire(
            "Eliminado!",
            "El evento ha sido eliminado correctamente",
            "success"
          );
          this.ngOnInit();
        });
      }
    });
  }
  actualizar(id: number): void {
    this.router.navigate(['/pages/eventos/actualizar/'+id]);
  }

  crear(): void {
    this.router.navigate(['/pages/eventos/crear']);
  }

}
