import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { SitiosService } from '../../../services/sitios.service';
import { Sitio } from '../../../models/sitio.model';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  columnas: string[] = ["ID", "Nombre", "Direccion", "Capacidad"];
  misSitios: Sitio[];

  constructor(private sitiosService: SitiosService, private router:Router) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.sitiosService.index().subscribe((data) => {
      this.misSitios = data;
      console.log(data);
    });
  }

  eliminar(id: number): void {
    Swal.fire({
      title: "Eliminar Usuario",
      text: "Está seguro que quiere eliminar el usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.sitiosService.destroy(id).subscribe((data) => {
          Swal.fire(
            "Eliminado!",
            "El usuario ha sido eliminado correctamente",
            "success"
          );
          this.ngOnInit();
        });
      }
    });
  }
  actualizar(id: number): void {
    this.router.navigate(['/pages/sitios/actualizar/'+id]);
  }

  crear(): void {
    this.router.navigate(['/pages/sitios/crear']);
  }

}
