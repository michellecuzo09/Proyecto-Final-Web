import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { JornadaService } from '../jornada.service';
import { Jornada } from '../jornada';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-actualizar-jornada-modal',
  templateUrl: './actualizar-jornada-modal.component.html',
  styleUrls: ['./actualizar-jornada-modal.component.css']
})
export class ActualizarJornadaModalComponent implements OnInit {
  @Input() jornada: Jornada | undefined;
  jornada_Id: number | undefined;
  updateForm!: FormGroup;

  constructor(public modalRef: BsModalRef, private fb: FormBuilder, private jornadaService: JornadaService) { }

  ngOnInit() {
    this.createForm();
 
    this.loadJornadaDetails();
  }

  createForm() {
    this.updateForm = this.fb.group({
      jornada_nombre: ['', [Validators.required, this.validarMayusculas()]],
    });
  }

  validarMayusculas(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value as string;

      if (value && !/^[A-Z][a-z]*$/.test(value))
      
      ///^[A-Z][a-z]*$/.test(valor);
      {
        return { mayusculas: true };
      }

      return null;
    };
  }

  loadJornadaDetails() {
    if (this.jornada_Id) {
      this.jornadaService.getjornadaid(this.jornada_Id).subscribe(jornada => {
        // Asegúrate de que this.updateForm esté inicializado
        this.updateForm.patchValue({
          jornada_nombre: jornada.jornada_nombre,
          // Otros campos según tu modelo Jornada
        });
      });
    }
  }

  onSubmit() {
    if (this.updateForm && this.updateForm.valid) {
      const updatedJornada = this.updateForm.value;
      updatedJornada.jornada_id = this.jornada?.jornada_id || 0;
  
      console.log('Jornada ID seleccionado:', updatedJornada.jornada_id);
      if (!updatedJornada.jornada_id) {
        console.error('Error: ID de jornada no válido');
        return;
      }
  
      this.jornadaService.updateJornada(updatedJornada).subscribe(
        data => {
          console.log('Jornada actualizada con éxito:', data);
          this.modalRef.hide();  // Cierra la ventana desplegable después de la actualización
        },
        error => {
          console.error('Error al actualizar la jornada:', error);
  
          if (error instanceof HttpErrorResponse && error.status === 200) {
            console.warn('El servidor respondió con un estado 200 pero el contenido no es JSON válido.');
          } else {
            // Manejar otros tipos de errores
          }
        }
      );
    } else {
      // El formulario no es válido, puedes agregar lógica adicional aquí si es necesario
      console.log('El formulario no es válido, muestra errores o realiza otras acciones.');
    }
  }
}