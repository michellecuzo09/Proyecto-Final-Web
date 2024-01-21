import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeriodoService } from './periodo.service';
import { Periodos } from './periodo';


@Component({
  selector: 'app-listar-periodo',
  templateUrl: './listar-periodo.component.html',
  styleUrls: ['./listar-periodo.component.css']
})
export class ListarPeriodoComponent implements OnInit{

  periodo: Periodos[] = [];

  constructor(private periodoService: PeriodoService, private router: Router) { }

  ngOnInit(): void {
    this.cargarPeriodo();
  }

  cargarPeriodo() {
    this.periodoService.getAll().subscribe(
      (data: Periodos[]) => {
        this.periodo = data;
      },
      (error) => {
        console.error('Error al cargar periodos:', error);
      }
    );
  }

  editarPeriodo(id: number): void {
    this.router.navigate(['/crear-periodo'], { queryParams: { editar: id } });
  }

  eliminarPeriodo(id: number) {
    this.periodoService.delete(id).subscribe(
      (response) => {
        console.log('Periodos eliminado exitosamente', response);
        this.cargarPeriodo();
      },
      (error) => {
        console.error('Error al eliminar periodo', error);
      }
    );
  }

}
