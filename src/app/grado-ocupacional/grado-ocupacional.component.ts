import { Component,OnInit } from '@angular/core';
import { GradoOcupacional } from './grado-ocupacional';
import { GradoOcupacionalService } from './grado-ocupacional.service';

@Component({
  selector: 'app-grado-ocupacional',
  templateUrl: './grado-ocupacional.component.html',
  styleUrls: ['./grado-ocupacional.component.css']
})
export class GradoOcupacionalComponent implements OnInit {

  grados : GradoOcupacional[] = [];

  constructor(private gradoService : GradoOcupacionalService){}

  ngOnInit(): void {
    this.cargarLista
  }
  cargarLista(): void {
    this.gradoService.getGrados().subscribe(
      grados => {
        this.grados = grados;
        console.log('Grados cargadas:', this.grados);
      },
      error => {
        console.error('Error al cargar grados ocupacionales:', error);
      }
    );
  }


}
