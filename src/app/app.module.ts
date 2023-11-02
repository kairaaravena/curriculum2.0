import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './div/datospersonales/datospersonales.component';
import { PerfilprofesionalComponent } from './fieldset/perfilprofesional/perfilprofesional.component';
import { EstudiosacademicosComponent } from './fieldset/estudiosacademicos/estudiosacademicos.component';
import { HabilidadesComponent } from './fieldset/habilidades/habilidades.component';
import { ProyectosComponent } from './fieldset/proyectos/proyectos.component';
import { ImagensiluetaComponent } from './div/imagensilueta/imagensilueta.component';
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
