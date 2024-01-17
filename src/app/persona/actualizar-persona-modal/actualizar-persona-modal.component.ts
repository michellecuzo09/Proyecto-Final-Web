import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-actualizar-persona-modal',
  templateUrl: './actualizar-persona-modal.component.html',
  styleUrls: ['./actualizar-persona-modal.component.css']
})
export class ActualizarPersonaModalComponent implements OnInit {
  @Input() persona: Persona | undefined;
  per_id: number | undefined;
  updateForm!: FormGroup;

  constructor(public modalRef: BsModalRef, private fb: FormBuilder, private PersonaService: PersonaService) { }

  ngOnInit() {
    this.createForm();
 
    this.loadpERSONADetails();
  }

  createForm() {
    this.updateForm = this.fb.group({
      per_cedula: ['', Validators.required],
      per_primer_nombre: ['', Validators.required],
      per_segundo_nombre: ['', Validators.required],
      per_apellido_paterno: ['', Validators.required],
      per_apellido_materno: ['', Validators.required],
      per_telefono: ['', Validators.required],
      per_email: ['', Validators.required],

      // Otros campos según tu modelo Jornada
    });
  }

  loadpERSONADetails() {
    if (this.per_id) {
      // Asegúrate de que jornada_Id tenga un valor antes de hacer la llamada al servicio
      this.PersonaService.getpersonaid(this.per_id).subscribe(Persona => {
        // Asegúrate de que this.updateForm esté inicializado
        this.updateForm.patchValue({
          per_cedula: this.persona?.per_cedula,
          per_primer_nombre:this.persona?.per_primer_nombre,
          per_segundo_nombre:this.persona?.per_segundo_nombre,
          per_apellido_paterno:this.persona?.per_apellido_paterno,
          per_apellido_materno:this.persona?.per_apellido_materno,
          per_telefono:this.persona?.per_telefono,
          per_email:this.persona?.per_email
          // Otros campos según tu modelo Jornada
        });
      });
    }
  }

  onSubmit() {
    if (this.updateForm && this.updateForm.valid) {
      const updatedPersona = this.updateForm.value;
      updatedPersona.per_id = this.persona?.per_id || 0;
  
      console.log('persoona ID seleccionado:', updatedPersona.per_id);
      if (!updatedPersona.per_id) {
        console.error('Error: ID de persona no válido');
        return;
      }
  
      this.PersonaService.updatePersona(updatedPersona).subscribe(
        data => {
          console.log('persona actualizada con éxito:', data);
          this.modalRef.hide();  // Cierra la ventana desplegable después de la actualización
        },
        error => {
          console.error('Error al actualizar la persona:', error);
      
          if (error instanceof HttpErrorResponse && error.status === 200) {
            console.warn('El servidor respondió con un estado 200 pero el contenido no es JSON válido.');
          } else {
            // Manejar otros tipos de errores
          }
        }
      );
  }}
}