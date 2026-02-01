import { Component } from '@angular/core';
import { BotoneraComponent } from './botonera/botonera.component';

@Component({
  selector: 'app-pregunta',
  standalone: true,
  imports: [BotoneraComponent],
  templateUrl: './pregunta.component.html',
  styleUrl: './pregunta.component.css'
})
export class PreguntaComponent {

}
