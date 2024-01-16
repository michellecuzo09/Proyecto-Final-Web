import { Component, OnInit } from '@angular/core';
import { JornadaService } from './jornada.service';
import { Jornada } from './jornada';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActualizarJornadaModalComponent } from './actualizar-jornada-modal/actualizar-jornada-modal.component';

@Component({
  selector: 'app-listar-jornada',
  templateUrl: './listar-jornada.component.html',
  styleUrls: ['./listar-jornada.component.css']
})
export class ListarJornadaComponent  implements OnInit {


  jornadas: Jornada[] = [];
  
  urlEndPoint_3: any;
  http: any;
  modalRef: BsModalRef | undefined ;
  jornada: Jornada | undefined;

  constructor(private jornadaService: JornadaService, private modalService: BsModalService ) {}

  ngOnInit(): void {
    this.cargarLista();
  }


  
  cargarLista(): void {
    this.jornadaService.getJornadas().subscribe(
      jornadas => this.jornadas = jornadas
    );
  }

  cargarJornada(jornadaId: number): void {
    this.jornadaService.getjornadaid(jornadaId).subscribe(
      data => {
        this.jornada = data;
        console.log(data); // Muestra la respuesta en la consola
        this.eliminarJornada(this.jornada.jornada_id);  // Llamada a la función para abrir el modal
      },
      error => {
        console.error(error);
      }
    );
  }
  
  //prueba
  abrirModalActualizar(jornada: Jornada) {
    const initialState = {
      jornada: jornada,  // Cambié 'jornada_Id' a 'jornada' para pasar el objeto completo
    };
  
    // Asignar la jornada al contexto del componente
    this.jornada = jornada;
  
    this.modalRef = this.modalService.show(ActualizarJornadaModalComponent, { initialState });
  }
  //
  eliminarJornada(jornadaId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta jornada?')) {
      // Llama al servicio para eliminar la jornada
      this.jornadaService.deleteJornada(jornadaId).subscribe(
        data => {
          console.log('Jornada eliminada con éxito:', data);
          // Aquí puedes realizar acciones adicionales después de la eliminación
        },
        error => {
          console.error('Error al eliminar la jornada:', error);
          // Manejar el error según sea necesario
        }
      );
    }
  }
  

}