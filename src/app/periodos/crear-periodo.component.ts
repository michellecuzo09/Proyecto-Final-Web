import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeriodoService } from './periodo.service';
import { Periodos } from './periodo';

@Component({
  selector: 'app-crear-periodo',
  templateUrl: './crear-periodo.component.html',
  styleUrls: ['./crear-periodo.component.css']
})
export class CrearPeriodoComponent implements OnInit {

  idEditar: number = 0;
  
  periodoEdicion: Periodos = {
    'periodo_id': 0,
    'periodo_mes_inicio': '',
    'periodo_mes_fin': '',
    'periodo_anio_inicio':0,
    'periodo_anio_fin':0,
  };

  constructor(
    private route: ActivatedRoute,
    private periodoService: PeriodoService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idEditar = +params['editar'];
      if (this.idEditar) {
        this.periodoService.getById(this.idEditar).subscribe(
          (periodo) => {
            this.periodoEdicion = periodo;
          },
          (error) => {
            console.error('Error al obtener la carrera para editar', error);
          }
        );
      }
    });
  }

  crearPeriodo() {
    if (this.idEditar) {
      this.periodoService
        .update(this.idEditar, this.periodoEdicion)
        .subscribe(
          (response) => {
            console.log('periodo actualizada exitosamente', response);
          },
          (error) => {
            console.error('Error al actualizar eñ periodo', error);
          }
        );
    } else {
      this.periodoService.create(this.periodoEdicion).subscribe(
        (response) => {
          console.log('Periodo creada exitosamente', response);
        },
        (error) => {
          console.error('Error al crear el periodo', error);
        }
      );
    }
  }
}
