import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {

  constructor(private hhtp: HttpClient) { }

  obtenerDatosPersonales():Observable<any>
  {
  return this.hhtp.get("./assets/data.json");
  }
}
