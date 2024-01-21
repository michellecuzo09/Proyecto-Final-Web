import { Component, OnInit } from '@angular/core';
import { ActividadesDocente } from './actividades-docente';
import { ActividadesDocenteService } from './actividades-docente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-actividades-docente',
  templateUrl: './listar-actividades-docente.component.html',
  styleUrls: ['./listar-actividades-docente.component.css'],
})
export class ListarActividadesDocenteComponent implements OnInit {

  actividades: ActividadesDocente[] = [];

  constructor(private actividadesService: ActividadesDocenteService,private router: Router) {}

  ngOnInit(): void {
    this.obtenerActividades();
  }

  obtenerActividades(): void {
    this.actividadesService.getActividades().subscribe((actividades) => {
      this.actividades = actividades;
    });
  }

  eliminarActividad(id: number): void {
    this.actividadesService.eliminarActividad(id).subscribe(() => {
      // Actualizar la lista después de eliminar
      this.obtenerActividades();
    });
  }

  editarActividad(id: number): void {
    this.router.navigate(['/actividades-docente'], { queryParams: { editar: id } });
  }
}
