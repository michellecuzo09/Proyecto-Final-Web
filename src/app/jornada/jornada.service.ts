import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jornada } from './jornada';

@Injectable({
    providedIn: 'root'
  })

  export class JornadaService{

    private urlEndPoint:string = 'http://localhost:8080/api/jornadas/listar'
    private urlEndPoint_1:string = 'http://localhost:8080/api/jornadas/guardar'
    private urlEndPoint_2:string = 'http://localhost:8080/api/jornadas/eliminar/{{id}}'
    private urlEndPoint_3:string = 'http://localhost:8080/api/jornadas/actualizar/{{id}}'
  
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
    
    constructor(private http:HttpClient) {}
  
      getJornada(): Observable<Jornada[]> {
   
        return this.http.get<Jornada[]>(this.urlEndPoint);
      }
  
      create(jornada: Jornada): Observable<Jornada> {
        return this.http.post<Jornada>(this.urlEndPoint_1, jornada, {headers: this.httpHeaders})
      }
  
      getjornada(id:number):Observable<Jornada> {
        return this.http.get<Jornada>(`${this.urlEndPoint_1}/${id}`)
      }
  
   //   deleteCliente(id: number): Observable<Cliente> {
   //     return this.http.delete<Cliente>(`${this.urlEndPoint_2}/${id}`);
   //   }
   
    deleteJornada(jornada_id: number): Observable<Jornada> {
          const url = `${this.urlEndPoint_2}/${jornada_id}`; // Ajusta la URL según tu estructura
           return this.http.delete<Jornada>(url);
    }
  
  //  updateJornada(jornada: Jornada): Observable<Jornada> {
   //   const url = `${this.urlEndPoint_3}/${jornada.jornada_id}`;
     // return this.http.put<Jornada>(url, jornada);
 //   }
 updateJornada(id: number, jornada: Jornada): Observable<any> {
  const url = `${this.urlEndPoint_3}/actualizar/${id}`; // Ajusta la URL según la estructura de tu backend
  return this.http.put(url, jornada);
}

}
