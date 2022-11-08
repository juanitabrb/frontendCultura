import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }
  index(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${environment.url_backend}/usuarios`);
  
  }
  destroy(id:number){
    return this.http.delete(`${environment.url_backend}/usuarios/${id}`);
  }
}