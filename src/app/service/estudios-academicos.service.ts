import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiosAcademicosService {

  constructor(private hhtp: HttpClient) { }

  obtenerestudiosAcademicos():Observable<any>
  {
  return this.hhtp.get("./assets/data.json");
  }
}
