import { Component, OnDestroy, OnInit } from '@angular/core';
import { Jornada } from './jornada';
import { JornadaService } from './jornada.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-jornada',
  templateUrl: './crear-jornada.component.html',
  styleUrls: ['./crear-jornada.component.css']
})
export class CrearJornadaComponent  {
  [x: string]: any;

  nuevaJornada: Jornada = new Jornada();
  botonDesactivado: boolean = false;

  constructor(private jornadaService: JornadaService, private router: Router) { }

  crearJornada() {
    // Desactivar el botón durante la solicitud
    this.botonDesactivado = true;
  
    this.jornadaService.create(this.nuevaJornada).subscribe(
      (response) => {
        // Éxito
        console.log('Jornada creada exitosamente:', response);
        // Resto de la lógica después de la creación exitosa
  
        // Cerrar la ventana después de guardar la jornada
        window.close();
      },
      (error) => {
        // Manejo de errores
        console.error('Error al crear la jornada:', error);
        if (error.status === 401) {
          // Redirigir al usuario a la página de inicio de sesión
          // Redirigir al usuario a la página de inicio de sesión
          this['router'].navigate(['/login']);
        } else if (error.error && error.error.error) {
          // Muestra el mensaje de error específico del servidor al usuario
          alert(error.error.error);
        } else {
          // Muestra un mensaje de error genérico al usuario
          alert('Error al crear la jornada. Por favor, inténtelo de nuevo.');
        }
  
        // Reactivar el botón después de un error
        this.botonDesactivado = false;
      }
    );
  }
  cancelar(): void {
    // Navegar a la lista de jornadas
    this.router.navigate(['/listarjornada']);
  }
}
