import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
 
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private hhtp: HttpClient) { }

  obtenerProyectos():Observable<any>
  {
    return this.hhtp.get("./assets/data.json");
  }
}
