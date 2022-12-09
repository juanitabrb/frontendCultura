import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Contrato } from '../models/contrato.model';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  constructor(private http: HttpClient) { }
  index(): Observable<Contrato[]>{
    return this.http.get<Contrato[]>(`${environment.url_backend}/contratos`);
  }
  destroy(id:number){
    return this.http.delete(`${environment.url_backend}/contratos/${id}`);
  }

  create(elSitio:Contrato){
    return this.http.post(`${environment.url_backend}/contratos`,elSitio);

  }

  update(elSitio:Contrato){
    console.log(elSitio.id)
    return this.http.put(`${environment.url_backend}/contratos/${elSitio.id}`,elSitio);
  }

  show(id:number):Observable<Contrato>{
    return this.http.get<Contrato>(`${environment.url_backend}/contratos/${id}`);
  }
}
