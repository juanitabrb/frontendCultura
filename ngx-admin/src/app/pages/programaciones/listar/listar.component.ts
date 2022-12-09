import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Programacion } from '../../../models/programacion.model';
import { ProgramacionService } from '../../../services/programacion.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  columnas: string[] = ["ID", "Descripcion", "Foto", "ID Evento", "Acciones"];
  misSitios: Programacion[];

  constructor(private programacionService: ProgramacionService, private router:Router) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.programacionService.index().subscribe((data) => {
      this.misSitios = data;
      console.log(data);
    });
  }

  eliminar(id: number): void {
    Swal.fire({
      title: "Eliminar Usuario",
      text: "Está seguro que quiere eliminar la programacion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.programacionService.destroy(id).subscribe((data) => {
          Swal.fire(
            "Eliminado!",
            "La programacion ha sido eliminado correctamente",
            "success"
          );
          this.ngOnInit();
        });
      }
    });
  }
  actualizar(id: number): void {
    this.router.navigate(['/pages/programaciones/actualizar/'+id]);
  }

  crear(): void {
    this.router.navigate(['/pages/programaciones/crear']);
  }

}
