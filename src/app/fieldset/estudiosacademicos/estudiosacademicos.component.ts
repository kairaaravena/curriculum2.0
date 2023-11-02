import { Component } from '@angular/core';
import { EstudiosAcademicosService } from 'src/app/service/estudios-academicos.service';

@Component({
  selector: 'app-estudiosacademicos',
  templateUrl: './estudiosacademicos.component.html',
  styleUrls: ['./estudiosacademicos.component.css']
})
export class EstudiosacademicosComponent {
  estudiosAcademicos:any;
  constructor(private EstudiosAcademicosService: EstudiosAcademicosService)
  {
    this.EstudiosAcademicosService.obtenerestudiosAcademicos().subscribe(
      {
        next: (data) => {
          this.estudiosAcademicos=data["estudios-academicos"];
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
