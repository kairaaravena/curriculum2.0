import { Component } from '@angular/core';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent {

  habilidades:any;
  constructor(private habilidadesService: HabilidadesService)
  {
    this.habilidadesService.obtenerHabilidades().subscribe(
      {
        next: (data) => {
          this.habilidades=data["Habilidades"];
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