import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento.model';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //get all thte events
  eventos: Evento[]=[]
  constructor(private eventosService: EventoService) { }

  ngOnInit(): void {
    this.eventosService.index().subscribe(data => {
      this.eventos=data;
      console.log(this.eventos)
    });
  }

}
