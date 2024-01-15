import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { JornadaService } from '../jornada.service';
import { Jornada } from '../jornada';

@Component({
  selector: 'app-actualizar-jornada-modal',
  templateUrl: './actualizar-jornada-modal.component.html',
  styleUrls: ['./actualizar-jornada-modal.component.css']
})
export class ActualizarJornadaModalComponent implements OnInit {
  @Input() jornada: Jornada | undefined;
  jornada_Id: number | undefined;
  updateForm!: FormGroup;
  jornadas: Jornada[] =[];

  constructor(public modalRef: BsModalRef, private fb: FormBuilder, private jornadaService: JornadaService) { }

  ngOnInit() {
    this.createForm();
    //this.loadJornadaDetails();
    this.cargarLista();
    
  }
  cargarLista():void {
    this.jornadaService.getJornadas().subscribe(
      jornada => this.jornadas = jornada
    )
  }

  createForm() {
    this.updateForm = this.fb.group({
      jornada_nombre: ['', Validators.required],
      // Otros campos según tu modelo Jornada
    });
  }

  loadJornadaDetails() {
    if (this.jornada_Id) {
      // Asegúrate de que jornada_Id tenga un valor antes de hacer la llamada al servicio
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

      // Pasa solo el ID de la jornada en lugar de la jornada completa
      this.jornadaService.updateJornada(updatedJornada).subscribe(
        data => {
          console.log('Jornada actualizada con éxito:', data);
        },
        error => {
          console.error('Error al actualizar la jornada:', error);
        }
      );
    }
  }
}
