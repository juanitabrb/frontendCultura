import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from '../../../models/categoria.model';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_evento: number = 0;
  elEvento:Categoria={
    nombre:"",
  }
  constructor(private rutaActiva: ActivatedRoute,
              private categoriaService:CategoriaService,
              private router:Router) {}

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id) {
      this.modoCreacion = false;
      this.id_evento = this.rutaActiva.snapshot.params.id;
      this.getUsuario(this.id_evento);
    } else {
      this.modoCreacion = true;
    }
  }
  getUsuario(id:number){
    this.categoriaService.show(id).subscribe(data => {
      this.elEvento=data;
      console.log(this.elEvento)
    });
  }
  crear(){
    console.log("creando a"+JSON.stringify(this.elEvento))
    this.categoriaService.create(this.elEvento)
          .subscribe(data => {
            Swal.fire(
              'Creado',
              'La categoria ha sido creado correctamente',
              'success'
            )
            this.router.navigate(['/pages/categorias/listar']);
        });
  }
  actualizar(){
    console.log("actualizando a"+JSON.stringify(this.elEvento))
    this.categoriaService.update(this.elEvento)
          .subscribe(data => {
            Swal.fire(
              'Actualizado',
              'La categoria ha sido actualizado correctamente',
              'success'
            )
            this.router.navigate(['/pages/categorias/listar']);
        })
  }

}
