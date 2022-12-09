import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Reserva } from '../models/reserva.model';
@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  constructor(private http: HttpClient) { }
  index(): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${environment.url_backend}/reservas`);
  
  }
  destroy(id:number){
    return this.http.delete(`${environment.url_backend}/reservas/${id}`);
  }

  create(laReserva:Reserva){
    return this.http.post(`${environment.url_backend}/reservas`,laReserva);

  }

  update(laReserva:Reserva){
    return this.http.put(`${environment.url_backend}/reservas/${laReserva.id}`,laReserva);
  }

  show(id:number):Observable<Reserva>{
    return this.http.get<Reserva>(`${environment.url_backend}/reservas/${id}`);
  }

}