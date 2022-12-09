import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Programacion } from '../models/programacion.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionService {

  constructor(private http: HttpClient) { }
  index(): Observable<Programacion[]>{
    return this.http.get<Programacion[]>(`${environment.url_backend}/programaciones`);
  
  }
  destroy(id:number){
    return this.http.delete(`${environment.url_backend}/programaciones/${id}`);
  }

  create(elSitio:Programacion){
    return this.http.post(`${environment.url_backend}/programaciones`,elSitio);

  }

  update(elSitio:Programacion){
    console.log(elSitio.id)
    return this.http.put(`${environment.url_backend}/programaciones/${elSitio.id}`,elSitio);
  }

  show(id:number):Observable<Programacion>{
    return this.http.get<Programacion>(`${environment.url_backend}/programaciones/${id}`);
  }
}
