import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../Usuario';
import { UsuarioService } from '../usuario.service';
@Component({
  selector: 'app-actualizar-usuario-modal',
  templateUrl: './actualizar-usuario-modal.component.html',
  styleUrls: ['./actualizar-usuario-modal.component.css']
})
export class ActualizarUsuarioModalComponent implements OnInit{
  @Input() usuario: Usuario | undefined;
  usu_id: number | undefined;
  updateForm!: FormGroup;

  constructor(public modalRef: BsModalRef, private fb: FormBuilder, private UsuarioService: UsuarioService) { }
  ngOnInit() {
    this.createForm();
 
    this.loadUsuDetails();
  }
  createForm() {
    this.updateForm = this.fb.group({
      usu_usuario: ['', Validators.required],
      usu_contrase: ['', Validators.required],
      per_id: ['', Validators.required],
      rol_id: ['', Validators.required],

      // Otros campos según tu modelo Jornada
    });
  }

  loadUsuDetails() {
    if (this.usu_id) {
      // Asegúrate de que jornada_Id tenga un valor antes de hacer la llamada al servicio
      this.UsuarioService.getUsuarioid(this.usu_id).subscribe(Usuario => {
        // Asegúrate de que this.updateForm esté inicializado
        this.updateForm.patchValue({
          usu_usuario: this.usuario?.usu_usuario,
          usu_contrase:this.usuario?.usu_contrasena,
          per_id:this.usuario?.persona.per_id,
          rol_id:this.usuario?.rol.rol_id,
          
          // Otros campos según tu modelo Jornada
        });
      });
    }
  }
  onSubmit() {
    if (this.updateForm && this.updateForm.valid) {
      const updatedUsu = this.updateForm.value;
      updatedUsu.usu_id = this.usuario?.usu_id || 0;
  
      console.log('usuario ID seleccionado:', updatedUsu.usu_id);
      if (!updatedUsu.usu_id) {
        console.error('Error: ID de usu no válido');
        return;
      }
  
      this.UsuarioService.updateuSU(updatedUsu).subscribe(
        data => {
          console.log('persona actualizada con éxito:', data);
          this.modalRef.hide();  // Cierra la ventana desplegable después de la actualización
        },
        error => {
          console.error('Error al actualizar la usuario:', error);
      
          if (error instanceof HttpErrorResponse && error.status === 200) {
            console.warn('El servidor respondió con un estado 200 pero el contenido no es JSON válido.');
          } else {
            // Manejar otros tipos de errores
          }
        }
      );
  }}
}
