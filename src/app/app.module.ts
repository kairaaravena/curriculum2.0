import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './componentes/datospersonales/datospersonales.component';
import { PerfilprofesionalComponent } from './componentes/perfilprofesional/perfilprofesional.component';
import { EstudiosacademicosComponent } from './componentes/estudiosacademicos/estudiosacademicos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ImagensiluetaComponent } from './componentes/imagensilueta/imagensilueta.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    PerfilprofesionalComponent,
    EstudiosacademicosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ImagensiluetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
