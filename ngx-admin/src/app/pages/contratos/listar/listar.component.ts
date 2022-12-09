import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Contrato } from '../../../models/contrato.model';
import { ContratosService } from '../../../services/contratos.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  columnas: string[] = ["ID", "ID Agrupacion", "ID Evento" ,"Acciones"];
  misSitios: Contrato[];

  constructor(private contratoService: ContratosService, private router:Router) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.contratoService.index().subscribe((data) => {
      this.misSitios = data;
      console.log(data);
    });
  }

  eliminar(id: number): void {
    Swal.fire({
      title: "Eliminar Usuario",
      text: "Está seguro que quiere eliminar el contrato?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.contratoService.destroy(id).subscribe((data) => {
          Swal.fire(
            "Eliminado!",
            "El contrato ha sido eliminado correctamente",
            "success"
          );
          this.ngOnInit();
        });
      }
    });
  }
  actualizar(id: number): void {
    this.router.navigate(['/pages/contratos/actualizar/'+id]);
  }

  crear(): void {
    this.router.navigate(['/pages/contratos/crear']);
  }

}
