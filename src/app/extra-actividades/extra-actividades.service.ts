import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtraActividadesService {

  private urlEndPoint:string = 'http://localhost:8080/api/extra_actividades/listar'
  private urlEndPoint_1:string = 'http://localhost:8080/api/extra_actividades/guardar'
  private urlEndPoint_2:string = 'http://localhost:8080/api/extra_actividades/eliminar/{{id}}'
  private urlEndPoint_3:string = 'http://localhost:8080/api/extra_actividades/actualizar/{{id}}'
  private urlEndPoint_4:string = 'http://localhost:8080/api/extra_actividades/buscar/{{id}}'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.urlEndPoint);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.urlEndPoint_1, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint_3}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint_2}/${id}`);
  }
}
