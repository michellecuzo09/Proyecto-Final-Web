import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarreraService } from './carrera.service';
import { Carrera } from './carrera';

@Component({
  selector: 'app-listar-carrera',
  templateUrl: './listar-carrera.component.html',
  styleUrls: ['./listar-carrera.component.css']
})
export class ListarCarreraComponent implements OnInit{

  carrera: Carrera[] = [];

  constructor(private carreraService: CarreraService, private router: Router) { }

  ngOnInit(): void {
    this.cargarCarrera();
  }

  cargarCarrera() {
    this.carreraService.getAll().subscribe(
      (data: Carrera[]) => {
        this.carrera = data;
      },
      (error) => {
        console.error('Error al cargar carreras:', error);
      }
    );
  }

  editarCarrera(id: number): void {
    this.router.navigate(['/crear-carrera'], { queryParams: { editar: id } });
  }

  eliminarCarrera(id: number) {
    this.carreraService.delete(id).subscribe(
      (response) => {
        console.log('Carrera eliminada exitosamente', response);
        this.cargarCarrera();
      },
      (error) => {
        console.error('Error al eliminar la carrera', error);
      }
    );
  }

}
