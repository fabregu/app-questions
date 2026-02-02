import { Component } from '@angular/core';
import { PreguntaService } from '../../../services/pregunta.service';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {
  btnString = 'Aceptar';
  constructor(public preguntaService: PreguntaService) {}

  siguiente() {
    switch (this.btnString) {
      case 'Aceptar': {
        this.preguntaService.pregConfirmada = true;
        this.btnString = 'Siguiente';
      }
    }
  }
}