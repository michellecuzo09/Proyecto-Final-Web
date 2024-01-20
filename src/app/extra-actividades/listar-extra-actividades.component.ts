import { Component, OnInit } from '@angular/core';
import { ExtraActividadesService } from './extra-actividades.service';
import { Router } from '@angular/router';  // Importa el servicio de Router


@Component({
  selector: 'app-listar-extra-actividades',
  templateUrl: './listar-extra-actividades.component.html',
  styleUrls: ['./listar-extra-actividades.component.css']
})

export class ListarExtraActividadesComponent implements OnInit {
  actividades: any[] = [];

  constructor(private extraActividadesService: ExtraActividadesService, private router: Router) { }

  ngOnInit(): void {
    this.cargarActividades();
  }

  cargarActividades() {
    this.extraActividadesService.getAll().subscribe(
      (data) => {
        this.actividades = data;
      },
      (error) => {
        console.error('Error al cargar actividades:', error);
      }
    );
  }

  editarActividad(actividad: any) {
    // Puedes redirigir a una página de edición con la información de la actividad
    this.router.navigate(['/editar-extra-actividad', actividad.extra_id]);
  }

  eliminarActividad(id: number) {
    this.extraActividadesService.delete(id).subscribe(
      (response) => {
        console.log('Actividad extra eliminada exitosamente', response);
        // Recargar la lista después de la eliminación
        this.cargarActividades();
      },
      (error) => {
        console.error('Error al eliminar la actividad extra', error);
      }
    );
  }
}
