import { Component, signal } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { Liste } from './pages/liste/liste';
import { PiedPage } from './composants/pied-page/pied-page';
@Component({
  imports: [EnTete, Liste, PiedPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('EvenementHub');
}
