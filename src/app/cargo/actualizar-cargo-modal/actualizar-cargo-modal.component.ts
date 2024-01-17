import { Component, Input, OnInit } from '@angular/core';
import { Cargo } from '../cargo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CargoserviceService } from '../cargoservice.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-actualizar-cargo-modal',
  templateUrl: './actualizar-cargo-modal.component.html',
  styleUrls: ['./actualizar-cargo-modal.component.css'],
})
export class ActualizarCargoModalComponent implements OnInit{
  @Input() cargo: Cargo | undefined;
  cargo_id: number | undefined;
  updateForm!: FormGroup;

  constructor(
    public modalRef: BsModalRef,
    private fb: FormBuilder,
    private cargoService: CargoserviceService
  ) {}

  ngOnInit() {
    this.createForm();

    this.loadCargoDetails();
  }

  createForm() {
    this.updateForm = this.fb.group({
      cargo_nombre: ['', Validators.required],
      cargo_descripcion: ['', Validators.required],
      // Otros campos según tu modelo Jornada
    });
  }

  loadCargoDetails() {
    if (this.cargo_id) {
      // Asegúrate de que jornada_Id tenga un valor antes de hacer la llamada al servicio
      this.cargoService.getcargoid(this.cargo_id).subscribe((cargo) => {
        // Asegúrate de que this.updateForm esté inicializado
        this.updateForm.patchValue({
          cargo_nombre: cargo.cargo_nombre,
          cargo_descripcion: cargo.cargo_descripcion,
          // Otros campos según tu modelo Jornada
        });
      });
    }
  }

  onSubmit() {
    if (this.updateForm && this.updateForm.valid) {
      const updatedCargo = this.updateForm.value;
      updatedCargo.cargo_id = this.cargo?.cargo_id || 0;

      console.log('Cargo ID seleccionado:', updatedCargo.cargo_id);
      if (!updatedCargo.cargo_id) {
        console.error('Error: ID de cargo no válido');
        return;
      }

      this.cargoService.updateCargo(updatedCargo).subscribe(
        (data) => {
          console.log('Cargo actualizado con éxito:', data);
          this.modalRef.hide(); // Cierra la ventana desplegable después de la actualización
        },
        (error) => {
          console.error('Error al actualizar la cargo:', error);

          if (error instanceof HttpErrorResponse && error.status === 200) {
            console.warn(
              'El servidor respondió con un estado 200 pero el contenido no es JSON válido.'
            );
          } else {
            // Manejar otros tipos de errores
          }
        }
      );
    }
  }
}
