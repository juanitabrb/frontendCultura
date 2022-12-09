import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Evento } from '../models/evento.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }
  index(): Observable<Evento[]>{
    return this.http.get<Evento[]>(`${environment.url_backend}/eventos`);
  
  }
  destroy(id:number){
    return this.http.delete(`${environment.url_backend}/eventos/${id}`);
  }

  create(elSitio:Evento){
    return this.http.post(`${environment.url_backend}/eventos`,elSitio);

  }

  update(elSitio:Evento){
    console.log(elSitio.id)
    return this.http.put(`${environment.url_backend}/eventos/${elSitio.id}`,elSitio);
  }

  show(id:number):Observable<Evento>{
    return this.http.get<Evento>(`${environment.url_backend}/eventos/${id}`);
  }
}
