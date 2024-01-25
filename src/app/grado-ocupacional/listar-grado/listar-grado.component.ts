import { Component,OnInit } from '@angular/core';
import { GradoOcupacional } from '../grado-ocupacional';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GradoOcupacionalService } from '../grado-ocupacional.service';
import { ActualizarGradoModalComponent } from '../actualizar-grado-modal/actualizar-grado-modal.component';
<<<<<<< Updated upstream
//import Swal from 'sweetalert2';
import { AlertService } from 'src/app/service/Alert.service';

=======
import Swal from 'sweetalert2';
>>>>>>> Stashed changes

@Component({
  selector: 'app-listar-grado',
  templateUrl: './listar-grado.component.html',
  styleUrls: ['./listar-grado.component.css']
})
export class ListarGradoComponent implements OnInit {


  grados: GradoOcupacional[] = [];
  
  urlEndPoint_3: any;
  http: any;
  modalRef: BsModalRef | undefined ;
  grado: GradoOcupacional | undefined;

  constructor(
    private Service: GradoOcupacionalService, 
    private modalService: BsModalService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.cargarLista();
  }


  
  cargarLista(): void {
    this.Service.getGrados().subscribe(
      grados => this.grados = grados
    );
  }

  cargarJornada(gradoId: number): void {
    this.Service.getgradoid(gradoId).subscribe(
      data => {
        this.grado = data;
        console.log(data); // Muestra la respuesta en la consola
        this.abrirModalActualizar(this.grado);  // Llamada a la función para abrir el modal
      },
      error => {
        console.error(error);
      }
    );
  }
  
  //prueba
  abrirModalActualizar(grado: GradoOcupacional) {
    const initialState = {
      grado: grado,  // Cambié 'jornada_Id' a 'jornada' para pasar el objeto completo
    };
  
    // Asignar la jornada al contexto del componente
    this.grado = grado;
  
    this.modalRef = this.modalService.show(ActualizarGradoModalComponent, { initialState });
  }

  // eliminar(gradoId: number): void {
  //   if (confirm('¿Estás seguro de que deseas eliminar esta jornada?')) {
  //     // Llama al servicio para eliminar la jornada
  //     this.Service.deleteGrado(gradoId).subscribe(
  //       data => {
  //         console.log('Grado eliminada con éxito:', data);
  //         // Aquí puedes realizar acciones adicionales después de la eliminación
  //       },
  //       error => {
  //         console.error('Error al eliminar grado ocupacional:', error);
  //         // Manejar el error según sea necesario
  //       }
  //     );
  //   }
  // }

  eliminar(gradoId: number): void {
<<<<<<< Updated upstream
    this.alertService
      .question(
        '¿Está seguro que desea eliminar?',
        '',
        true,
        true,
        'Sí, eliminar',
        'Cancelar',
        'assets/icons/exclamation.png'
      )
      .then((result) => {
        if (result) {
          // Llama al servicio para eliminar el grado ocupacional
          this.Service.deleteGrado(gradoId).subscribe(
            () => {
              this.alertService.notification(
                `Grado Ocupacional Eliminado: ${this.grado?.grado_titulo}`,
                'success'
              );
              this.cargarLista(); // Actualizar la lista después de eliminar
            },
            (error) => {
              console.error('Error al eliminar grado ocupacional:', error);
            }
          );
        }
      });
=======
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Llama al servicio para eliminar el grado ocupacional
        this.Service.deleteGrado(gradoId).subscribe(
          () => {
            Swal.fire('Grado Ocupacional Eliminado', `Cliente ${this.grado?.grado_titulo} eliminado con éxito`,'success');
          },
          (error) => {
            console.error('Error al eliminar grado ocupacional:', error);
            
          }
        );
      }
    });
>>>>>>> Stashed changes
  }
  
}
