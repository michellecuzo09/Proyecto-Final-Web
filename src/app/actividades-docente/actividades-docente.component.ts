import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadesDocente } from './actividades-docente';
import { ActividadesDocenteService } from './actividades-docente.service';

@Component({
  selector: 'app-actividades-docente',
  templateUrl: './actividades-docente.component.html',
  styleUrls: ['./actividades-docente.component.css']
})
export class ActividadesDocenteComponent implements OnInit{

  idEditar: number = 0;
  
  actividadEnEdicion: ActividadesDocente = {
    'actividoc_id':0,
    'actividoc_horas_docencia': 8,
    'actividoc_nombre_actividad':'',
    'asignatura_id': 0,
    'extra_id': 0,
  };

  constructor(
    private route: ActivatedRoute,
    private actividadesDocenteservice: ActividadesDocenteService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idEditar = +params['editar'];
      if (this.idEditar) {
        this.actividadesDocenteservice.getById(this.idEditar).subscribe(
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

  crearActividadDocente() {
    if (this.idEditar) {
      this.actividadesDocenteservice
        .update(this.idEditar, this.actividadEnEdicion)
        .subscribe(
          (response) => {
            console.log('Actividad Docente actualizada exitosamente', response);
          },
          (error) => {
            console.error('Error al actualizar la actividad docente', error);
          }
        );
    } else {
      this.actividadesDocenteservice.create(this.actividadEnEdicion).subscribe(
        (response) => {
          console.log('Actividad Docente creada exitosamente', response);
        },
        (error) => {
          console.error('Error al crear la actividad Docente', error);
        }
      );
    }
  }
}
