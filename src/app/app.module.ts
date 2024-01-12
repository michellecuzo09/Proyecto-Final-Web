import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RolesComponent } from './roles/roles.component';
import { RecuperacionContrasenaComponent } from './recuperacion-contrasena/recuperacion-contrasena.component';
import { CrearRolComponent } from './crear-rol/crear-rol.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { MenudespComponent } from './menudesp/menudesp.component';
import { PeriodosComponent } from './periodos/periodos.component';
import { PersonaComponent } from './persona/persona.component';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { TituloComponent } from './titulo/titulo.component';
import { CrearTituloComponent } from './crear-titulo/crear-titulo.component';
import { TipoContratoComponent } from './tipo-contrato/tipo-contrato.component';
import { CrearTipoContratoComponent } from './crear-tipo-contrato/crear-tipo-contrato.component';
import { GradoOcupacionalComponent } from './grado-ocupacional/grado-ocupacional.component';
import { CrearGradoOcupacionalComponent } from './crear-grado-ocupacional/crear-grado-ocupacional.component';
import { CargoComponent } from './cargo/cargo.component';
import { CrearCargoComponent } from './crear-cargo/crear-cargo.component';
import { CrearJornadaComponent } from './crear-jornada/crear-jornada.component';
import { CrearPeriodoComponent } from './crear-periodo/crear-periodo.component';
import { ListarJornadaComponent } from './listar-jornada/listar-jornada.component';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { CrearCarreraComponent } from './crear-carrera/crear-carrera.component';
import { CarreraComponent } from './carrera/carrera.component';
import { SeleccionActividadComponent } from './seleccion-actividad/seleccion-actividad.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { CrearAsignaturaComponent } from './crear-asignatura/crear-asignatura.component';

import { ActividadesDocenteComponent } from './actividades-docente/actividades-docente.component';
import { ActividadesNoDocenteComponent } from './actividades-no-docente/actividades-no-docente.component';
import { ExtraActividadesComponent } from './extra-actividades/extra-actividades.component';
import { ListarActividadesDocentesComponent } from './listar-actividades-docentes/listar-actividades-docentes.component';
import { ListarActividadesNoDocentesComponent } from './listar-actividades-no-docentes/listar-actividades-no-docentes.component';
import { ListarExtraActividadesComponent } from './listar-extra-actividades/listar-extra-actividades.component';
import { DocenteComponent } from './docente/docente.component';
import { CreardocenteComponent } from './creardocente/creardocente.component';
import { DistributivoComponent } from './distributivo/distributivo.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'crear-rol', component: CrearRolComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'menud', component: MenudespComponent },
  { path: 'crearUsuario', component: CrearUsuarioComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'crearpersona', component: CrearPersonaComponent },
  { path: 'titulo', component: TituloComponent },
  { path: 'tipocontrato', component: TipoContratoComponent },
  { path: 'crearcontrato', component: CrearTipoContratoComponent },
  { path: 'cargo', component: CargoComponent },
  { path: 'crearcargo', component: CrearCargoComponent },
  { path: 'crearjornada', component: CrearJornadaComponent },
  { path: 'periodo', component: PeriodosComponent },
  { path: 'crearperiodo', component: CrearPeriodoComponent },
  { path: 'listarjornada', component: ListarJornadaComponent },
  { path: 'listarcurso', component: ListarCursoComponent },
  { path: 'crearcurso', component: CrearCursoComponent },
  { path: 'crear-carrera', component: CrearCarreraComponent },
  { path: 'carrera', component: CarreraComponent },
  {
    path: 'recuperacion-contrasena',
    component: RecuperacionContrasenaComponent,
  },
  { path: 'creartitulo', component: CrearTituloComponent },
  { path: 'gradoOcu', component: GradoOcupacionalComponent },
  { path: 'creargrado', component: CrearGradoOcupacionalComponent },
  { path: 'docente', component: DocenteComponent },

  { path: 'seleccion-actividad', component: SeleccionActividadComponent },
  { path: 'asignatura', component: AsignaturaComponent },
  { path: 'crearasignatura', component: CrearAsignaturaComponent },

  { path: 'actividades-docente', component: ActividadesDocenteComponent },
  { path: 'actividades-no-docente', component: ActividadesNoDocenteComponent },
  { path: 'extra-actividades', component: ExtraActividadesComponent },
  { path: 'seleccion-actividades', component: SeleccionActividadComponent },
  { path: 'listar-actividades-docentes', component: ListarActividadesDocentesComponent },
  { path: 'listar-actividades-no-docentes', component: ListarActividadesNoDocentesComponent },
  { path: 'listar-extra-actividades', component: ListarExtraActividadesComponent },
  { path: 'creardocente', component: CreardocenteComponent },
  { path: 'distributivo', component: DistributivoComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RolesComponent,
    RecuperacionContrasenaComponent,
    CrearRolComponent,
    FooterComponent,
    UsuarioComponent,
    CrearUsuarioComponent,
    MenudespComponent,
    CrearUsuarioComponent,
    PersonaComponent,
    CrearPersonaComponent,
    TituloComponent,
    CrearTituloComponent,
    TipoContratoComponent,
    CrearTipoContratoComponent,
    GradoOcupacionalComponent,
    CrearGradoOcupacionalComponent,
    CargoComponent,
    CrearCargoComponent,
    CrearJornadaComponent,
    PeriodosComponent,
    CrearPeriodoComponent,
    ListarJornadaComponent,
    ListarCursoComponent,
    CrearCursoComponent,
    CrearCarreraComponent,
    CarreraComponent,
    SeleccionActividadComponent,
    AsignaturaComponent,
    CrearAsignaturaComponent,
    ActividadesDocenteComponent,
    ActividadesNoDocenteComponent,
    ExtraActividadesComponent,
    ListarActividadesDocentesComponent,
    ListarActividadesNoDocentesComponent,
    ListarExtraActividadesComponent,
    DocenteComponent,
    CreardocenteComponent,
    DistributivoComponent,
  ],

  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
