import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../services/seguridad.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AdministradorGuard implements CanActivate {
  constructor(private miServicioSeguridad:SeguridadService, private router:Router){
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.miServicioSeguridad.sesionExiste() && this.miServicioSeguridad.verificarRolSesion(environment.ID_ROL_ADMIN)){
      return true;
    }
    else{
      this.router.navigate(['/pages/seguridad/login']);
      return false;
    }
  }
  
}
