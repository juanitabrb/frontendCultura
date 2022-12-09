import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Agrupacion } from '../models/agrupacion.model';

@Injectable({
  providedIn: 'root'
})
export class AgrupacionService {
  constructor(private http: HttpClient) { }
  index(): Observable<Agrupacion[]>{
    return this.http.get<Agrupacion[]>(`${environment.url_backend}/agrupaciones`);
  }
  destroy(id:number){
    return this.http.delete(`${environment.url_backend}/agrupaciones/${id}`);
  }

  create(elSitio:Agrupacion){
    return this.http.post(`${environment.url_backend}/agrupaciones`,elSitio);

  }

  update(elSitio:Agrupacion){
    console.log(elSitio.id)
    return this.http.put(`${environment.url_backend}/agrupaciones/${elSitio.id}`,elSitio);
  }

  show(id:number):Observable<Agrupacion>{
    return this.http.get<Agrupacion>(`${environment.url_backend}/agrupaciones/${id}`);
  }
}
