import { Component } from '@angular/core';
import { Cargo } from './cargo';
import { CargoserviceService } from './cargoservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cargo',
  templateUrl: './crear-cargo.component.html',
  styleUrls: ['./crear-cargo.component.css'],
})
export class CrearCargoComponent {
  [x: string]: any;

  nuevoCargo: Cargo = new Cargo();
  botonDesactivado: boolean = false;

  constructor(
    private cargoService: CargoserviceService,
    private router: Router
  ) {}

  crearCargo() {
    // Desactivar el botón durante la solicitud
    this.botonDesactivado = true;

    this.cargoService.create(this.nuevoCargo).subscribe(
      (response) => {
        // Éxito
        console.log('Cargo creado exitosamente:', response);
        // Resto de la lógica después de la creación exitosa

        // Cerrar la ventana después de guardar la jornada
        window.close();
      },
      (error) => {
        // Manejo de errores
        console.error('Error al crear el cargo:', error);
        if (error.status === 401) {
          // Redirigir al usuario a la página de inicio de sesión
          // Redirigir al usuario a la página de inicio de sesión
          this['router'].navigate(['/login']);
        } else if (error.error && error.error.error) {
          // Muestra el mensaje de error específico del servidor al usuario
          alert(error.error.error);
        } else {
          // Muestra un mensaje de error genérico al usuario
          alert('Error al crear el cargo. Por favor, inténtelo de nuevo.');
        }

        // Reactivar el botón después de un error
        this.botonDesactivado = false;
      }
    );
  }
  cancelar(): void {
    // Navegar a la lista de jornadas
    this.router.navigate(['/cargo']);
  }
}
