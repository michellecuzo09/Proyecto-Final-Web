import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  // Define la propiedad personas
  personas: any[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    // Llama a la función cargarPersonas() del servicio al inicializar el componente
    this.usuarioService.cargarPersonas();
    // Asigna las personas del servicio a la propiedad personas del componente
    this.personas = this.usuarioService.personas;
  }
}
