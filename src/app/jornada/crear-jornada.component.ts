import { Component, OnDestroy, OnInit } from '@angular/core';
import { Jornada } from './jornada';
import { JornadaService } from './jornada.service';
import { Router } from '@angular/router';
import { Validators } from '../validators';


@Component({
  selector: 'app-crear-jornada',
  templateUrl: './crear-jornada.component.html',
  styleUrls: ['./crear-jornada.component.css']
})
export class CrearJornadaComponent {
  nuevaJornada: Jornada = new Jornada();
  botonDesactivado = false;
  formularioEnviado = false;

  validarMayusculas(): boolean {
    return this.formularioEnviado && (!this.nuevaJornada.jornada_nombre || Validators.validarMayusculas(this.nuevaJornada.jornada_nombre));
  }
  
  constructor(private jornadaService: JornadaService, private router: Router) { }

  crearJornada() {
    this.formularioEnviado = true;

    if (!this.validarMayusculas()) {
      return;
    }
    this.botonDesactivado = true;

    this.jornadaService.create(this.nuevaJornada).subscribe(
      (response) => {
        // Éxito
        console.log('Jornada creada exitosamente:', response);

        setTimeout(() => {
        window.close();
      }, 100);
    },
      (error) => {
        console.error('Error al crear la jornada:', error);
        if (error.status === 401) {

          this.router.navigate(['/login']);
        } else if (error.error && error.error.error) {

          alert(error.error.error);
        } else {

          alert('Error al crear la jornada. Por favor, inténtelo de nuevo.');
        }

        this.botonDesactivado = false;
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['/listarjornada']);
  }
}