import { Component, OnInit } from '@angular/core';
import { Jornada } from './jornada';
import { JornadaService } from './jornada.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html'
  //styleUrls: ['./jornada.component.css']
})
export class JornadaComponent implements OnInit{

  jornadas : Jornada[] = [];

  constructor(private jornadaService : JornadaService){}

  ngOnInit(): void {
    this.cargarLista
  }
  cargarLista():void {
    this.jornadaService.getJornada().subscribe(
      jornada => this.jornadas = jornada
    )
  }

}
