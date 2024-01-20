import { Component, OnInit } from '@angular/core';
import { ExtraActividades } from './extra-actividades';
import { ExtraActividadesService } from './extra-actividades.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extra-actividades',
  templateUrl: './extra-actividades.component.html',
  styleUrls: ['./extra-actividades.component.css']
})


export class ExtraActividadesComponent {
  nuevaActividad: any = {};

  constructor(private extraActividadesService: ExtraActividadesService) { }

  crearExtraActividad() {
    this.extraActividadesService.create(this.nuevaActividad).subscribe(
      (response) => {
        console.log('Actividad extra creada exitosamente', response);
      },
      (error) => {
        console.error('Error al crear la actividad extra', error);
      }
    );
  }
}