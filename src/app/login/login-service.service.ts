import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../usuario/Usuario";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {

    private urlEndPoint: string = 'http://localhost:8080/api/usuario/listartabla'; // Ajusta la URL según tu backend

    constructor(private http: HttpClient) { }
  
    login(usuario: string, password: string): Observable<boolean> {
      // Aquí deberías enviar los datos de inicio de sesión al servidor
      // y manejar la respuesta del servidor adecuadamente

      const body = {
        usuario: usuario,
        password: password
      };
  
      return this.http.post<boolean>(this.urlEndPoint, body);
    }
  }