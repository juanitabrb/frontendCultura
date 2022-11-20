import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SeguridadService } from '../services/seguridad.service';
import Swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ServiciosInterceptor implements HttpInterceptor {

  constructor(public miServicioSeguridad: SeguridadService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.miServicioSeguridad.usuarioSesionActiva) {
      console.log("agregando token")
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.miServicioSeguridad.usuarioSesionActiva.token}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigateByUrl('/pages/dashboard');
        }
        return throwError(err);
      })
    );
  }
}
 

