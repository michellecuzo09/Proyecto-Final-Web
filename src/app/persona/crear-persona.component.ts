import { Component } from '@angular/core';
import { Persona } from './persona';
import { Router } from '@angular/router';
import { PersonaService } from './persona.service';
@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent {
  [x: string]: any;
  nuevaPer: Persona = new Persona();
  botonDesactivado: boolean = false;
  constructor(private personaService: PersonaService, private router: Router) { }
  crearPer() {
    // Desactivar el botón durante la solicitud
    this.botonDesactivado = true;
  
    this.personaService.create(this.nuevaPer).subscribe(
      (response) => {
        // Éxito
        console.log('PERSONA creada exitosamente:', response);
        // Resto de la lógica después de la creación exitosa
  
        // Cerrar la ventana después de guardar la jornada
        window.close();
      },
      (error) => {
        // Manejo de errores
        console.error('Error al crear el PERSONA:', error);
        if (error.status === 401) {
          // Redirigir al usuario a la página de inicio de sesión
          // Redirigir al usuario a la página de inicio de sesión
          this['router'].navigate(['/login']);
        } else if (error.error && error.error.error) {
          // Muestra el mensaje de error específico del servidor al usuario
          alert(error.error.error);
        } else {
          // Muestra un mensaje de error genérico al usuario
          alert('Error al crear la PERSONA. Por favor, inténtelo de nuevo.');
        }
  
        // Reactivar el botón después de un error
        this.botonDesactivado = false;
      }
    );
  }
  cancelar(): void {
    // Navegar a la lista de jornadas
    this.router.navigate(['/persona']);
  }
}
