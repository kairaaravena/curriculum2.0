import { Component } from '@angular/core';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectos:any;
  constructor(private ProyectosService: ProyectosService)
  {
    this.ProyectosService.obtenerProyectos().subscribe(
      {
        next:(data) => {
          this.proyectos=data["Proyectos"];
          console.log(data);
        },
        error:(err) =>{
          alert("Se ha producido un error.Por favor, intente nuevamente");
          console.error(err);
        }
      }
    )
  }

}
