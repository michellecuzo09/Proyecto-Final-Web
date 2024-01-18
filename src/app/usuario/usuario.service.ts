import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './Usuario';
import { Persona } from '../persona/persona';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  [x: string]: any;
  
  private urlcat = 'http://localhost:8080/personas';
  private urlEndPoint:string = 'http://localhost:8080/api/usuario/listar'
  private urlEndPoint_1:string = 'http://localhost:8080/api/usuario/guardar'
  private urlEndPoint_2:string = 'http://localhost:8080/api/usuario/eliminar/{{id}}'
  private urlEndPoint_3:string = 'http://localhost:8080/api/usuario/actualizar/{{id}}'
  private urlEndPoint_4:string = 'http://localhost:8080/api/usuario/buscar/{{id}}'

 
  constructor(private http:HttpClient) { }
  getUsuario(): Observable<Usuario[]> {
   
    return this.http.get<Usuario[]>(this.urlEndPoint);
  }

  

  getUsuarioid(id:number):Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlEndPoint_1}/${id}`)
  }
  deleteUsuario(usu_id: number): Observable<Usuario> {
    const url = `http://localhost:8080/api/usuario/eliminar/${usu_id}`; // Ajusta la URL según tu estructura
     return this.http.delete<Usuario>(url);
}
updateuSU(usuario: Usuario): Observable<Usuario> {
  const url = `http://localhost:8080/api/usuario/actualizar/${usuario.usu_id}`;
  console.log('URL de actualización:', url);
  return this.http.put<Usuario>(url, usuario);
}
}
