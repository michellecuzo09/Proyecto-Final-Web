import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarJornadaComponent } from './jornada/listar-jornada.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ListarGradoComponent } from './grado-ocupacional/listar-grado/listar-grado.component';

const routes: Routes = [
  // Define tus rutas aquí
  { path: 'abrirModalActualizar/:id', component: ListarJornadaComponent},
  {path:'abrirModalActualizar/:id',component: ListarGradoComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  providers: [BsModalService],
  imports: [ModalModule,
    CommonModule,RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
