import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActividadesDocente } from './actividades-docente';


@Injectable({
  providedIn: 'root'
})
export class ActividadesDocenteService {

  private urlEndPoint:string = 'http://localhost:8080/api/actividadesdocentes/listarActividadesDocentes';
  private urlEndPoint_1:string = 'http://localhost:8080/api/actividadesdocentes/guardarActividadDocente';

  private urlEndPoint_2:string = 'http://localhost:8080/api/actividadesdocentes/eliminarActividadDocente/{id}';
  private urlEndPoint_3:string = 'http://localhost:8080/api/actividadesdocentes/actualizarActividadDocente/{id}';
  private urlEndPoint_4:string = 'http://localhost:8080/api/actividadesdocentes/buscarActividadDocente/{id}';

  constructor(private http: HttpClient) { }

  getActividades(): Observable<ActividadesDocente[]> {
    return this.http.get<ActividadesDocente[]>(this.urlEndPoint);
  }

  getById(id: number): Observable<ActividadesDocente> {
    return this.http.get<ActividadesDocente>(`${this.urlEndPoint_4}/${id}`);
  }

  create(data: ActividadesDocente): Observable<ActividadesDocente> {
    return this.http.post<ActividadesDocente>(this.urlEndPoint_1, data);
  }

  update(id: number, data: ActividadesDocente): Observable<ActividadesDocente> {
    return this.http.put<ActividadesDocente>(`${this.urlEndPoint_3}/${id}`, data);
  }

  eliminarActividad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlEndPoint_2}/${id}`);
  }
}
