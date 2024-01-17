import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Rol } from '../roles';
import { RolesService } from '../roles.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-actualizar-role-modal',
  templateUrl: './actualizar-role-modal.component.html',
  styleUrls: ['./actualizar-role-modal.component.css']
})
export class ActualizarRoleComponent implements OnInit{
  
  @Input() rol: Rol| undefined;
  rol_id: number | undefined;
  updateForm!: FormGroup;

  constructor(public modalRef: BsModalRef, private fb: FormBuilder, private rolesService: RolesService) { }

  ngOnInit() {
    this.createForm();
 
    this.loadRoleDetails();
  }

  createForm() {
    this.updateForm = this.fb.group({
      rol_nombre: ['', Validators.required],

      rol_descripcion: ['', Validators.required],
      // Otros campos según tu modelo Jornada
    });
  }

  loadRoleDetails() {
    if (this.rol_id) {
      // Asegúrate de que jornada_Id tenga un valor antes de hacer la llamada al servicio
      this.rolesService.getrolesid(this.rol_id).subscribe(roles => {
        // Asegúrate de que this.updateForm esté inicializado
        this.updateForm.patchValue({
          rol_nombre: roles.rol_nombre,
          rol_descripcion:roles.rol_descripcion 
      
          // Otros campos según tu modelo Jornada
        });
      });
    }
  }

  onSubmit() {
    if (this.updateForm && this.updateForm.valid) {
      const updatedRoles = this.updateForm.value;
      updatedRoles.rol_id = this. rol?.rol_id || 0;
  
      console.log('rol ID seleccionado:', updatedRoles.rol_id);
      if (!updatedRoles.rol_id) {
        console.error('Error: ID de ROL no válido');
        return;
      }
  
      this.rolesService.updateRoles(updatedRoles).subscribe(
        data => {
          console.log('rol actualizada con éxito:', data);
          this.modalRef.hide();  // Cierra la ventana desplegable después de la actualización
        },
        error => {
          console.error('Error al actualizar la rol:', error);
      
          if (error instanceof HttpErrorResponse && error.status === 200) {
            console.warn('El servidor respondió con un estado 200 pero el contenido no es JSON válido.');
          } else {
            // Manejar otros tipos de errores
          }
        }
      );
  }}
}
