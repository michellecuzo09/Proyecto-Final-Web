import { Component,OnInit } from '@angular/core';
import { GradoOcupacional } from '../grado-ocupacional';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { GradoOcupacionalService } from '../grado-ocupacional.service';
import { ActualizarGradoModalComponent } from '../actualizar-grado-modal/actualizar-grado-modal.component';

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

  constructor(private Service: GradoOcupacionalService, private modalService: BsModalService ) {}

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
}
