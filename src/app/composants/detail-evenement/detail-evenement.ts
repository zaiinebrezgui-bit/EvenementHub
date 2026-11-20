import { Component, Input } from '@angular/core';
import {Evenement} from '../../modeles/evenement';
@Component({
  imports: [],
  selector: 'app-detail-evenement',
  styleUrl: './detail-evenement.css',
  templateUrl: './detail-evenement.html',
})
export class DetailEvenement {
  @Input() evenement: Evenement | null = null;

  get taux(): number {
    if (!this.evenement) {
      return 0;
    }
    return Math.round((this.evenement.placesReservees / this.evenement.capacite) * 100);
  }
}
