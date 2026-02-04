import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta.entity';
import { Respuesta } from '../models/respuesta.entity';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta: number = 0;
  opcionSeleccionada: Respuesta | null = null;
  deshabilitarBoton = true;
  pregConfirmada = false;
  indexRespuesta: number | null = null;
  respuestaUsuario: Array<number | null> = [];

  public preguntas: any[] = [
    new Pregunta('¿Cuál es la capital de Francia?', [
      new Respuesta('París', 1),
      new Respuesta('Roma', 0),
      new Respuesta('Londres', 0),
      new Respuesta('Tel-Aviv', 0)
    ]),
    new Pregunta('¿Cuál es la capital de Rusia?', [
      new Respuesta('Montevideo', 0),
      new Respuesta('El Cairo', 0),
      new Respuesta('Moscú', 1),
      new Respuesta('La Habana', 0)
    ]),
    new Pregunta('¿Cuál es la capital de Holanda?', [
      new Respuesta('Quito', 0),
      new Respuesta('Amsterdam', 1),
      new Respuesta('Madrid', 0),
      new Respuesta('Whashington', 0)
    ])
  ];
  constructor() { }

  getPreguntas() {
    return this.preguntas.slice();
  }
}