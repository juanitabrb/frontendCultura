import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Sitio } from '../models/sitio.model';

@Injectable({
  providedIn: 'root'
})
export class SitiosService {

  constructor(private http: HttpClient) { }
  index(): Observable<Sitio[]>{
    return this.http.get<Sitio[]>(`${environment.url_backend}/sitios`);
  
  }
  destroy(id:number){
    return this.http.delete(`${environment.url_backend}/sitios/${id}`);
  }

  create(elSitio:Sitio){
    return this.http.post(`${environment.url_backend}/sitios`,elSitio);

  }

  update(elSitio:Sitio){
    console.log(elSitio.id)
    return this.http.put(`${environment.url_backend}/sitios/${elSitio.id}`,elSitio);
  }

  show(id:number):Observable<Sitio>{
    return this.http.get<Sitio>(`${environment.url_backend}/sitios/${id}`);
  }
}
