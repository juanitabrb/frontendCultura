import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  columnas:string[] = ['id','nombre','correo'];
  misUsuarios: Usuario[]=[
    {
      id: 1,
      nombre: 'Juan',
      correo: 'juan@gmail.com',
      contrasena: '123456'
    },
    {
      id: 2,
      nombre: 'Pedro',
      correo: 'pedro@gmail.com',
      contrasena: '123456'
    },
    {
      id: 3,
      nombre: 'Maria',
      correo: 'maria@correo.com',
      contrasena: '123456'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios():void{
    this.misUsuarios.forEach((usuario)=>{
      console.log(usuario.nombre);
    });
  }

}
