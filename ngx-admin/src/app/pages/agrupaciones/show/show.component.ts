import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../../../models/evento.model';
import { AgrupacionService } from '../../../services/agrupacion.service';

@Component({
  selector: 'ngx-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  columnas: string[] = ["ID", "Nombre", "Descripcion", "Fecha"];
  misEventos: Evento[];
  id_agrupacion: number=0;

  constructor(private agrupacionService: AgrupacionService,
              private rutaActiva: ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id) {
      this.id_agrupacion = this.rutaActiva.snapshot.params.id;
      this.getAgrupacion(this.id_agrupacion);
    }
  }

  getAgrupacion(id:number){
    this.agrupacionService.show(id).subscribe(data => {
      console.log(data)
      this.misEventos=data.eventos;
    });
  }

}
