import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Agrupacion } from '../../../models/agrupacion.model';
import { AgrupacionService } from '../../../services/agrupacion.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  columnas: string[] = ["ID", "Nombre", "Descripcion" ,"Acciones"];
  misSitios: Agrupacion[];

  constructor(private agrupacionService: AgrupacionService, private router:Router) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.agrupacionService.index().subscribe((data) => {
      this.misSitios = data;
      console.log(data);
    });
  }

  eliminar(id: number): void {
    Swal.fire({
      title: "Eliminar Usuario",
      text: "Está seguro que quiere eliminar la agrupacion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.agrupacionService.destroy(id).subscribe((data) => {
          Swal.fire(
            "Eliminado!",
            "La arupacion ha sido eliminado correctamente",
            "success"
          );
          this.ngOnInit();
        });
      }
    });
  }
  actualizar(id: number): void {
    this.router.navigate(['/pages/agrupaciones/actualizar/'+id]);
  }

  ver(id: number): void {
    this.router.navigate(['/pages/agrupaciones/show/'+id]);
  }

  crear(): void {
    this.router.navigate(['/pages/agrupaciones/crear']);
  }
}
