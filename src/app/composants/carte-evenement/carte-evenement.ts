//EventEmitter : permettre d'envoyer un événement au parent
//@Output() : permet à l'enfant de communiquer avec son parent
//@Input() : recevoir des données depuis le parent
import { Component, EventEmitter, Input, Output } from '@angular/core';
//importer l'interface Evenement
import { Evenement } from '../../modeles/evenement';

@Component({
  imports: [],
  selector: 'app-carte-evenement',
  styleUrl: './carte-evenement.css',
  templateUrl: './carte-evenement.html',
})
export class CarteEvenement {
  //recevoir un événement depuis le composant parent
  @Input() evenement: Evenement | null = null;//Evenement | null : parce que notre composant peut ne pas encore avoir reçu d'événement
  //envoyer un événement au parent lorsqu'on ajoute un favori
  @Output() favori = new EventEmitter<Evenement>();
  //envoyer un événement au parent lorsqu'on sélectionne une carte
  @Output() selectionne = new EventEmitter<Evenement>();
  //une propriété qui indique si l'événement est terminé
  get termine(): boolean {
    //vérifier que l'événement existe et que sa date est passée
    return this.evenement !== null && this.evenement.date.getTime() < Date.now();
  }
  //ajouter un événement aux favoris
  ajouterFavori() {
    //vérifier que l'événement existe
    if (this.evenement) {
      //envoyer l'événement au composant parent
      this.favori.emit(this.evenement);
    }
  }
  //afficher les détails d'un événement
  voirDetail() {
    // Vérifier que l'événement existe
    if (this.evenement) {
      // Envoyer l'événement sélectionné au composant parent
      this.selectionne.emit(this.evenement);
    }
  }
}
