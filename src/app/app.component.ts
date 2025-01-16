import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {TablaPersonasComponent} from './components/tabla-personas/tabla-personas.component';
import {FormularioPersonaComponent} from './components/formulario-persona/formulario-persona.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, TablaPersonasComponent, FormularioPersonaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project';
}
