import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotoneraComponent } from './botonera/botonera.component';
import { Pregunta } from '../../models/pregunta.entity';
import { PreguntaService } from '../../services/pregunta.service';
import { Respuesta } from '../../models/respuesta.entity';

@Component({
  selector: 'app-pregunta',
  standalone: true,
  imports: [CommonModule, BotoneraComponent],
  templateUrl: './pregunta.component.html',
  styleUrl: './pregunta.component.css'
})
export class PreguntaComponent {
  listPreguntas: Pregunta[] = [];

  constructor(public preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.listPreguntas = this.preguntaService.getPreguntas();
  }

  obtenerPreguntas() {
    return this.listPreguntas[this.preguntaService.indexPregunta].descripcionPregunta;
  }

  respuestaSeleccionada(respuesta: Respuesta, indexRta: number) {
    if(this.preguntaService.pregConfirmada === true) {
      return;
    }
    this.preguntaService.opcionSeleccionada = respuesta;
    this.preguntaService.deshabilitarBoton = false;
    this.preguntaService.indexRespuesta = indexRta;
  }

  addClassOption(respuesta: Respuesta) {
    //return respuesta === this.preguntaService.opcionSeleccionada && !this.preguntaService.pregConfirmada ? 'active text-light' : '';
    if (respuesta === this.preguntaService.opcionSeleccionada && !this.preguntaService.pregConfirmada) {
      return 'active text-light';
    }

    //Respuesta correctay confirmada
    if (respuesta === this.preguntaService.opcionSeleccionada && this.preguntaService.pregConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return 'list-group-item-success';
    }

    //Respuesta incorrecta y confirmada
    if (respuesta === this.preguntaService.opcionSeleccionada && this.preguntaService.pregConfirmada && this.preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return 'list-group-item-danger';
    }
    return '';
  }

  iconCorrecta(respuesta: Respuesta) {
    //Icono respuesta correcta
    if (respuesta === this.preguntaService.opcionSeleccionada && 
        this.preguntaService.pregConfirmada && 
        this.preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return true;
    } else {
      return false;
    }
  }

  iconIncorrecta(respuesta: Respuesta) {
    //Icono respuesta correcta
    if (respuesta === this.preguntaService.opcionSeleccionada && 
        this.preguntaService.pregConfirmada && 
        this.preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return true;
    } else {
      return false;
    }
  }
}