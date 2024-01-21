import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrera } from './carrera';


@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  private urlEndPoint:string = 'http://localhost:8080/api/carrera/listarCarreras';
  private urlEndPoint_1:string = 'http://localhost:8080/api/carrera/guardarCarreras';

  private urlEndPoint_2:string = 'http://localhost:8080/api/carrera/eliminarCarrera/{id}';
  private urlEndPoint_3:string = 'http://localhost:8080/api/carrera/actualizarCarrera/{id}';
  private urlEndPoint_4:string = 'http://localhost:8080/api/carrera/buscarCarrera/{id}';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(this.urlEndPoint);
  }

  getById(id: number): Observable<Carrera> {
    return this.http.get<Carrera>(`${this.urlEndPoint_4}/${id}`);
  }

  create(data: Carrera): Observable<Carrera> {
    return this.http.post<Carrera>(this.urlEndPoint_1, data);
  }

  update(id: number, data: Carrera): Observable<Carrera> {
    return this.http.put<Carrera>(`${this.urlEndPoint_3}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlEndPoint_2}/${id}`);
  }
}
