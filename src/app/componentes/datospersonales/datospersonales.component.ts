import { Component } from '@angular/core';
import { DatosPersonalesService } from 'src/app/service/datos-personales.service';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css']
})

export class DatosPersonalesComponent {

  datosPersonales:any;
  constructor(private DatosPersonalesService: DatosPersonalesService)
  {
    this.DatosPersonalesService.obtenerDatosPersonales().subscribe(
      {
        next: (data) => {
          this.datosPersonales=data["datosPersonales"];
          console.log("COMPONENTE DATOS PERSONALES")
          console.log(this.datosPersonales);
          console.log(this.datosPersonales.nombre);
        },
        error:(err) => {
          alert("Se ha producido un error.Por favor, intente nuevamente");
          console.error(err);

        }
      }

    )
  }
}

