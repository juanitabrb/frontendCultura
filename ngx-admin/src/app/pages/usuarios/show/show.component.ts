import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'ngx-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  columnas: string[] = ["ID", "Nombre", "Descripcion", "Fecha"];
  misEventos: Usuario[];
  id_agrupacion: number=0;

  constructor(private usuarioService: UsuarioService,
              private rutaActiva: ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id) {
      this.id_agrupacion = this.rutaActiva.snapshot.params.id;
      this.getAgrupacion(this.id_agrupacion);
    }
  }

  getAgrupacion(id:number){
    this.usuarioService.show(id).subscribe(data => {
      console.log(data)
      this.misEventos=data.eventos;
    });
  }

}
