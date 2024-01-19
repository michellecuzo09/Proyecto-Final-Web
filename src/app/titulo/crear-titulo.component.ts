import { Component } from '@angular/core';
import { Titulo } from './titulo';
import { TituloService } from './titulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-titulo',
  templateUrl: './crear-titulo.component.html',
  styleUrls: ['./crear-titulo.component.css']
})
export class CrearTituloComponent {
  [x: string]: any;
  nuevoTitu: Titulo = new Titulo();
  botonDesactivado: boolean = false;
  constructor(private tituloService: TituloService, private router: Router) { }
  creartitulo() {
    // Desactivar el botón durante la solicitud
    this.botonDesactivado = true;
  
    this.tituloService.create(this.nuevoTitu).subscribe(
      (response) => {
        // Éxito
        console.log('titulo creada exitosamente:', response);
        // Resto de la lógica después de la creación exitosa
  
        // Cerrar la ventana después de guardar la jornada
        window.close();
      },
      (error) => {
        // Manejo de errores
        console.error('Error al crear el titulo:', error);
        if (error.status === 401) {
          // Redirigir al usuario a la página de inicio de sesión
          // Redirigir al usuario a la página de inicio de sesión
          this['router'].navigate(['/login']);
        } else if (error.error && error.error.error) {
          // Muestra el mensaje de error específico del servidor al usuario
          alert(error.error.error);
        } else {
          // Muestra un mensaje de error genérico al usuario
          alert('Error al crear la titulo. Por favor, inténtelo de nuevo.');
        }
  
        // Reactivar el botón después de un error
        this.botonDesactivado = false;
      }
    );
  }
  cancelar(): void {
    // Navegar a la lista de jornadas
    this.router.navigate(['/titulo']);
  }
}

