import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Periodos } from './periodo';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  private urlEndPoint:string = 'http://localhost:8080/api/periodos/listar';
  private urlEndPoint_1:string = 'http://localhost:8080/api/periodos/guardar';

  private urlEndPoint_2:string = 'http://localhost:8080/api/periodos/eliminar/{id}';
  private urlEndPoint_3:string = 'http://localhost:8080/api/periodos/actualizar/{id}';
  private urlEndPoint_4:string = 'http://localhost:8080/api/periodos/buscar/{id}';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Periodos[]> {
    return this.http.get<Periodos[]>(this.urlEndPoint);
  }

  getById(id: number): Observable<Periodos> {
    return this.http.get<Periodos>(`${this.urlEndPoint_4}/${id}`);
  }

  create(data: Periodos): Observable<Periodos> {
    return this.http.post<Periodos>(this.urlEndPoint_1, data);
  }

  update(id: number, data: Periodos): Observable<Periodos> {
    return this.http.put<Periodos>(`${this.urlEndPoint_3}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlEndPoint_2}/${id}`);
  }

}
