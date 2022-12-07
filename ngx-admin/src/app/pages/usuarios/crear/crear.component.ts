import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2';
import { RolService } from '../../../services/rol.service';
import { Rol } from "../../../models/rol.model";

@Component({
  selector: "ngx-crear",
  templateUrl: "./crear.component.html",
  styleUrls: ["./crear.component.scss"],
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_usuario: number = 0;
  elUsuario:Usuario={
    "nombre":"",
    "correo":"",
    "contrasena":""
  }
  roles:Rol[]=[];
  idrolSeleccionado:number=0;
  
  constructor(private rutaActiva: ActivatedRoute,
              private miServicioUsuarios:UsuarioService,
              private router:Router,
              private miServicioRoles:RolService) {}

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id) {
      this.modoCreacion = false;
      this.id_usuario = this.rutaActiva.snapshot.params.id;
      this.getUsuario(this.id_usuario);
    } else {
      this.modoCreacion = true;
    }
    this.getRoles();
  }

  getRoles(){
    this.miServicioRoles.index().subscribe(data => {
      this.roles = data;
    }
    );
  }
  getUsuario(id:number){
    this.miServicioUsuarios.show(id).subscribe(data => {
      this.elUsuario=data;
      this.idrolSeleccionado=this.elUsuario.id_rol;
    });
  }
  crear(){
    this.elUsuario.id_rol=this.idrolSeleccionado;
    console.log("creando a"+JSON.stringify(this.elUsuario))
    this.miServicioUsuarios.create(this.elUsuario)
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
    this.elUsuario.id_rol=this.idrolSeleccionado;
    console.log("actualizando a"+JSON.stringify(this.elUsuario))
    this.miServicioUsuarios.update(this.elUsuario)
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

