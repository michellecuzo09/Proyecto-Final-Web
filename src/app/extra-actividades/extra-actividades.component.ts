import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExtraActividades } from './extra-actividades';
import { ExtraActividadesService } from './extra-actividades.service';

@Component({
  selector: 'app-extra-actividades',
  templateUrl: './extra-actividades.component.html',
  styleUrls: ['./extra-actividades.component.css'],
})
export class ExtraActividadesComponent implements OnInit {
  
  idEditar: number = 0;
  
  actividadEnEdicion: ExtraActividades = {
    'extra_id': 0,
    'extra_nombre_proyecto_investigacion': '',
    'extra_horas_investigacion': 0,
    'extra_detalle_hora_gestion_academico': '',
    'extra_horas_direccion_gestion_academica_semanal': 0
  };

  constructor(
    private route: ActivatedRoute,
    private extraActividadesService: ExtraActividadesService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idEditar = +params['editar'];
      if (this.idEditar) {
        this.extraActividadesService.getById(this.idEditar).subscribe(
          (actividad) => {
            this.actividadEnEdicion = actividad;
          },
          (error) => {
            console.error('Error al obtener la actividad extra para editar', error);
          }
        );
      }
    });
  }

  crearExtraActividad() {
    if (this.idEditar) {
      this.extraActividadesService
        .update(this.idEditar, this.actividadEnEdicion)
        .subscribe(
          (response) => {
            console.log('Actividad extra actualizada exitosamente', response);
          },
          (error) => {
            console.error('Error al actualizar la actividad extra', error);
          }
        );
    } else {
      this.extraActividadesService.create(this.actividadEnEdicion).subscribe(
        (response) => {
          console.log('Actividad extra creada exitosamente', response);
        },
        (error) => {
          console.error('Error al crear la actividad extra', error);
        }
      );
    }
  }
}
