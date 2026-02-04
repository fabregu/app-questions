import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pregunta } from '../../models/pregunta.entity';
import { PreguntaService } from '../../services/pregunta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-respuesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './respuesta.component.html',
  styleUrl: './respuesta.component.css'
})
export class RespuestaComponent {
  listPreguntas: Pregunta[] = [];
  respuestasUsuario: any[] = [];

  constructor (
    private preguntaService: PreguntaService,
    private router: Router) {}

  ngOnInit(): void {
    this.listPreguntas = this.preguntaService.preguntas;
    this.respuestasUsuario = this.preguntaService.respuestaUsuario;
  }

  volver() {
    this.preguntaService.respuestaUsuario = [];
    this.router.navigate(['/']);
  }
}
