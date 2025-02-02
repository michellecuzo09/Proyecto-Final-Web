import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from './persona';

@Injectable({
    providedIn: 'root'
  })

  export class PersonaService{
  [x: string]: any;
  
    private urlEndPoint:string = 'http://localhost:8080/api/personas/listar'
    private urlEndPoint_1:string = 'http://localhost:8080/api/personas/guardar'
    private urlEndPoint_2:string = 'http://localhost:8080/api/personas/eliminar/{{id}}'
    private urlEndPoint_3:string = 'http://localhost:8080/api/personas/actualizar/{{id}}'
    private urlEndPoint_4:string = 'http://localhost:8080/api/personas/buscar/{{id}}'
  
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
    
    constructor(private http:HttpClient) {}
  
      getPersona(): Observable<Persona[]> {
   
        return this.http.get<Persona[]>(this.urlEndPoint);
      }
  
      create(persona: Persona): Observable<Persona> {
        return this.http.post<Persona>(this.urlEndPoint_1, persona, {headers: this.httpHeaders})
      }
  
      getpersonaid(id:number):Observable<Persona> {
        return this.http.get<Persona>(`${this.urlEndPoint_1}/${id}`)
      }
  
   //   deleteCliente(id: number): Observable<Cliente> {
   //     return this.http.delete<Cliente>(`${this.urlEndPoint_2}/${id}`);
   //   }
   
    deletePersona(per_id: number): Observable<Persona> {
          const url = `http://localhost:8080/api/personas/eliminar/${per_id}`; // Ajusta la URL según tu estructura
           return this.http.delete<Persona>(url);
    }
  

 updatePersona(persona: Persona): Observable<Persona> {
  const url = `http://localhost:8080/api/personas/actualizar/${persona.per_id}`;
  console.log('URL de actualización:', url);
  return this.http.put<Persona>(url, persona);
}
///


}
