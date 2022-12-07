import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';
import { Rol } from '../models/rol.model';
@Injectable({
  providedIn: 'root'
})
export class RolService {
  constructor(private http: HttpClient) { }
  index(): Observable<Rol[]>{
    return this.http.get<Rol[]>(`${environment.url_backend}/roles`);
  
  }
  destroy(id:number){
    return this.http.delete(`${environment.url_backend}/roles/${id}`);
  }

  create(elRol:Rol){
    return this.http.post(`${environment.url_backend}/roles`,elRol);

  }

  update(elRol:Rol){
    return this.http.put(`${environment.url_backend}/roles/${elRol.id}`,elRol);
  }

  show(id:number):Observable<Rol>{
    return this.http.get<Rol>(`${environment.url_backend}/roles/${id}`);
  }
}
