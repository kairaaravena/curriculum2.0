import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PerfilProfesionalService {

  constructor(private hhtp: HttpClient) { }

  obtenerPerfilProfesional():Observable<any>
  {
    return this.hhtp.get("./assets/data.json");
  }
}
