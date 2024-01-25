import { Component ,OnInit,Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HttpErrorResponse } from '@angular/common/http';
import { GradoOcupacional } from '../grado-ocupacional';
import { GradoOcupacionalService } from '../grado-ocupacional.service';
import { AlertService } from 'src/app/service/Alert.service';


@Component({
  selector: 'app-actualizar-grado-modal',
  templateUrl: './actualizar-grado-modal.component.html',
  styleUrls: ['./actualizar-grado-modal.component.css']
})
export class ActualizarGradoModalComponent implements OnInit {
  @Input() grado: GradoOcupacional | undefined;
  grado_Id: number | undefined;
  updateForm!: FormGroup;

  constructor(public modalRef: BsModalRef, private fb: FormBuilder, private gradoService: GradoOcupacionalService, private alertService: AlertService) { }

  ngOnInit() {
    this.createForm();
 
    this.loadGradoDetails();
  }

  createForm() {
    this.updateForm = this.fb.group({
      grado_titulo: ['', Validators.required],
      grado_tipo_salario: ['', Validators.required],
      // Otros campos según tu modelo Jornada
    });
  }

  loadGradoDetails() {
    if (this.grado_Id) {
      // Asegúrate de que jornada_Id tenga un valor antes de hacer la llamada al servicio
      this.gradoService.getgradoid(this.grado_Id).subscribe(grado => {
        // Asegúrate de que this.updateForm esté inicializado
        this.updateForm.patchValue({
          grado_titulo: grado.grado_titulo,
          grado_tipo_salario: grado.grado_tipo_salario,
          // Otros campos según tu modelo Jornada
        });
      });
    }
  }




  // onSubmit() {
  //   if (this.updateForm && this.updateForm.valid) {
  //     const updatedGrado = this.updateForm.value;
  //     updatedGrado.grado_id = this.grado?.grado_id || 0;
  
  //     console.log('Grado ID seleccionado:', updatedGrado.grado_id);
  //     if (!updatedGrado.grado_id) {
  //       console.error('Error: ID de jornada no válido');
  //       return;
  //     }
  
  //     this.gradoService.updateGrado(updatedGrado).subscribe(
  //       data => {
  //         console.log('Grado actualizada con éxito:', data);
  //         this.modalRef.hide();  // Cierra la ventana desplegable después de la actualización
  //       },
  //       error => {
  //         console.error('Error al actualizar el grado:', error);
      
  //         if (error instanceof HttpErrorResponse && error.status === 200) {
  //           console.warn('El servidor respondió con un estado 200 pero el contenido no es JSON válido.');
  //         } else {
  //           // Manejar otros tipos de errores
  //         }
  //       }
  //     );
  // }}

  onSubmit() {
    if (this.updateForm && this.updateForm.valid) {
      const updatedGrado = this.updateForm.value;
      updatedGrado.grado_id = this.grado?.grado_id || 0;
  
      console.log('Grado ID seleccionado:', updatedGrado.grado_id);
      if (!updatedGrado.grado_id) {
        console.error('Error: ID de jornada no válido');
        return;
      }
  
      this.alertService.question(
        '¿Actualizar grado ocupacional?',
        '',
        true, // Mostrar botón de confirmación
        true, // Mostrar botón de cancelar
        'Confirmar', // Texto del botón de confirmación
        'Cancelar', // Texto del botón de cancelar
        'assets/icons/actualizar.png' // Opcional: URL de la imagen
      ).then((result) => {
        if (result) {
          // Si se confirma la pregunta, realizar la solicitud HTTP para actualizar el grado
          this.gradoService.updateGrado(updatedGrado).subscribe(
            data => {
              console.log('Grado actualizado con éxito:', data);
              this.modalRef.hide();  // Cierra la ventana desplegable después de la actualización
            },
            error => {
              console.error('Error al actualizar el grado:', error);
              if (error instanceof HttpErrorResponse && error.status === 200) {
                console.warn('El servidor respondió con un estado 200 pero el contenido no es JSON válido.');
              } else {
                // Manejar otros tipos de errores
              }
            }
          );
        } else {
          // Si se cancela la pregunta, no realizar ninguna acción adicional
          console.log('La actualización del grado fue cancelada.');
        }
      });
    }
  }
}
