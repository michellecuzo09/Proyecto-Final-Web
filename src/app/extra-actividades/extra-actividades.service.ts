import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExtraActividades } from './extra-actividades';

@Injectable({
  providedIn: 'root',
})
export class ExtraActividadesService {

  private urlEndPoint:string = 'http://localhost:8080/api/extrasactividades/listarExtrasActividades';
  private urlEndPoint_1:string = 'http://localhost:8080/api/extrasactividades/guardarExtraActividad';

  private urlEndPoint_2:string = 'http://localhost:8080/api/extrasactividades/eliminarExtraActividad/{id}';
  private urlEndPoint_3:string = 'http://localhost:8080/api/extrasactividades/actualizarExtraActividad/{id}';
  private urlEndPoint_4:string = 'http://localhost:8080/api/extrasactividades/buscarExtraActividad/{id}';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ExtraActividades[]> {
    return this.http.get<ExtraActividades[]>(this.urlEndPoint);
  }

  getById(id: number): Observable<ExtraActividades> {
    return this.http.get<ExtraActividades>(`${this.urlEndPoint_4}/${id}`);
  }

  create(data: ExtraActividades): Observable<ExtraActividades> {
    return this.http.post<ExtraActividades>(this.urlEndPoint_1, data);
  }

  update(id: number, data: ExtraActividades): Observable<ExtraActividades> {
    return this.http.put<ExtraActividades>(`${this.urlEndPoint_3}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlEndPoint_2}/${id}`);
  }
}
