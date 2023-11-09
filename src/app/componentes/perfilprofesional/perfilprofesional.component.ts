import { Component } from '@angular/core';
import { PerfilProfesionalService } from 'src/app/service/perfil-profesional.service';

@Component({
  selector: 'app-perfilprofesional',
  templateUrl: './perfilprofesional.component.html',
  styleUrls: ['./perfilprofesional.component.css']
})
export class PerfilprofesionalComponent {

  perfilProfecional:any;
  constructor(private PerfilProfecionalService: PerfilProfesionalService)
  {
    this.PerfilProfecionalService.obtenerPerfilProfesional().subscribe(
      {
        next: (data) => {
          this.perfilProfecional=data["perfil-profecional"];
          console.log(data);
        },
        error:(err) => {
          alert("Se ha producido un error.Por favor, intente nuevamente");
          console.error(err);

        }
      }

    )
  }

}
