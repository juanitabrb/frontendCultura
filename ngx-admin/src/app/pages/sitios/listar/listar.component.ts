import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { Usuario } from "../../../models/usuario.model";
import { UsuarioService } from "../../../services/usuario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  columnas: string[] = ["ID", "Nombre", "Correo", "Rol", "Acciones"];
  misUsuarios: Usuario[];

  constructor(private miServicioUsuarios: UsuarioService, private router:Router) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.miServicioUsuarios.index().subscribe((data) => {
      this.misUsuarios = data;
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
        this.miServicioUsuarios.destroy(id).subscribe((data) => {
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
    this.router.navigate(['/pages/usuarios/actualizar/'+id]);
  }

  crear(): void {
    this.router.navigate(['/pages/usuarios/crear']);
  }

}
