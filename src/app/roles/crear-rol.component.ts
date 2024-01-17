import { Component } from '@angular/core';
import { Rol } from './roles';
import { Router } from '@angular/router';
import { RolesService } from './roles.service';

@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.css']
})
export class CrearRolComponent {
  [x: string]: any;
  nuevoRol: Rol = new Rol();
  botonDesactivado: boolean = false;
  constructor(private rolesService: RolesService, private router: Router) { }
  crearRol() {
    // Desactivar el botón durante la solicitud
    this.botonDesactivado = true;
  
    this.rolesService.create(this.nuevoRol).subscribe(
      (response) => {
        // Éxito
        console.log('rol creada exitosamente:', response);
        // Resto de la lógica después de la creación exitosa
  
        // Cerrar la ventana después de guardar la jornada
        window.close();
      },
      (error) => {
        // Manejo de errores
        console.error('Error al crear el rol:', error);
        if (error.status === 401) {
          // Redirigir al usuario a la página de inicio de sesión
          // Redirigir al usuario a la página de inicio de sesión
          this['router'].navigate(['/login']);
        } else if (error.error && error.error.error) {
          // Muestra el mensaje de error específico del servidor al usuario
          alert(error.error.error);
        } else {
          // Muestra un mensaje de error genérico al usuario
          alert('Error al crear la rol. Por favor, inténtelo de nuevo.');
        }
  
        // Reactivar el botón después de un error
        this.botonDesactivado = false;
      }
    );
  }
  cancelar(): void {
    // Navegar a la lista de jornadas
    this.router.navigate(['/roles']);
  }
}
