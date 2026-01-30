import { Respuesta } from "./respuesta.entity";

export class Pregunta {
    descripcionPregunta: string = '';
    respuestas: Respuesta[] = [];

    public(descripcionPregunta: string, respuestas: Respuesta[]) {
        this.descripcionPregunta = descripcionPregunta;
        this.respuestas = respuestas;
    }
}