import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { VentanaPrincipalComponent } from './ventana-principal/ventana-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    RegistroComponent,
    VentanaPrincipalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
