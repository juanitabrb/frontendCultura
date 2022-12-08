import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../services/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate  {
  constructor(private miServicioSeguridad:SeguridadService, private router:Router){
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(this.miServicioSeguridad.sesionExiste())
    if(this.miServicioSeguridad.sesionExiste()){
      return true;
    }
    else{
      this.router.navigate(['/pages/seguridad/login']);
      return false;
    }
  }
    
  
  
  
}
