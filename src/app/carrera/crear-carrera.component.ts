import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarreraService } from './carrera.service';
import { Carrera } from './carrera';

@Component({
  selector: 'app-crear-carrera',
  templateUrl: './crear-carrera.component.html',
  styleUrls: ['./crear-carrera.component.css']
})
export class CrearCarreraComponent implements OnInit {

  idEditar: number = 0;
  
  actividadEnEdicion: Carrera = {
    'carrera_id': 0,
    'carrera_nombre': '',
    'carrera_modalidad': '',
  };

  constructor(
    private route: ActivatedRoute,
    private carreraService: CarreraService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idEditar = +params['editar'];
      if (this.idEditar) {
        this.carreraService.getById(this.idEditar).subscribe(
          (carrera) => {
            this.actividadEnEdicion = carrera;
          },
          (error) => {
            console.error('Error al obtener la carrera para editar', error);
          }
        );
      }
    });
  }

  crearCarrera() {
    if (this.idEditar) {
      this.carreraService
        .update(this.idEditar, this.actividadEnEdicion)
        .subscribe(
          (response) => {
            console.log('carrera actualizada exitosamente', response);
          },
          (error) => {
            console.error('Error al actualizar la carrera', error);
          }
        );
    } else {
      this.carreraService.create(this.actividadEnEdicion).subscribe(
        (response) => {
          console.log('Carrera creada exitosamente', response);
        },
        (error) => {
          console.error('Error al crear la carrera', error);
        }
      );
    }
  }

}
