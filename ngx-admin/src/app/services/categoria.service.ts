import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }
  index(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${environment.url_backend}/categorias`);
  }
  destroy(id:number){
    return this.http.delete(`${environment.url_backend}/categorias/${id}`);
  }

  create(elSitio:Categoria){
    return this.http.post(`${environment.url_backend}/categorias`,elSitio);

  }

  update(elSitio:Categoria){
    console.log(elSitio.id)
    return this.http.put(`${environment.url_backend}/categorias/${elSitio.id}`,elSitio);
  }

  show(id:number):Observable<Categoria>{
    return this.http.get<Categoria>(`${environment.url_backend}/categorias/${id}`);
  }
}
