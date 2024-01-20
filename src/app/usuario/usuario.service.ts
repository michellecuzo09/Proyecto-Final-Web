import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './Usuario';
import { Persona } from '../persona/persona';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlEndPoint: string = 'http://localhost:8080/api/usuario/listar';
  private urlEndPoint_1: string = 'http://localhost:8080/api/usuario/guardar';
  private urlEndPoint_2: string = 'http://localhost:8080/api/usuario/eliminar/{{id}}';
  private urlEndPoint_3: string = 'http://localhost:8080/api/usuario/actualizar/{{id}}';
  private urlEndPoint_4: string = 'http://localhost:8080/api/usuario/buscar/{{id}}';
  private urlPersonas: string = 'http://localhost:8080/personas';

  personas: Persona[] = [];  // Arreglo para almacenar las personas obtenidas de la API

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlEndPoint);
  }

  getUsuarioid(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlEndPoint_1}/${id}`);
  }

  deleteUsuario(usu_id: number): Observable<Usuario> {
    const url = `http://localhost:8080/api/usuario/eliminar/${usu_id}`;
    return this.http.delete<Usuario>(url);
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `http://localhost:8080/api/usuario/actualizar/${usuario.usu_id}`;
    return this.http.put<Usuario>(url, usuario);
  }

  // Obtener personas para cargar en el select
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.urlPersonas);
  }

  // Cargar personas al inicializar el componente
  cargarPersonas() {
    this.getPersonas().subscribe(personas => this.personas = personas);
  }
  
}
