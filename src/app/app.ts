//signal est une manière de stocker une valeur dans angular
//avec signal angular détecte automatiquement les changements de sa valeur et actualiser l'affichage
import { Component, signal } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { Liste } from './pages/liste/liste';
import { PiedPage } from './composants/pied-page/pied-page';
//parce que dans app.html, on va utiliser <app-detail-evenement>
import { DetailEvenement } from './composants/detail-evenement/detail-evenement';
//le type Evenement sert à typer la propriété evenementSelectionne
import { Evenement } from './modeles/evenement';
@Component({
  imports: [EnTete, Liste, DetailEvenement, PiedPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //déclarer un signal contenant le nom de l'application
  protected readonly title = signal('EvenementHub');
  //événement choisi dans la liste (null tant qu'aucun n'est sélectionné)
  evenementSelectionne: Evenement | null = null;
  //méthode appelée quand la liste émet (evenementSelectionne)
  onSelectionEvenement(e: Evenement) {
    this.evenementSelectionne = e;
  }
}
