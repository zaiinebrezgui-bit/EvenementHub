import { Component, EventEmitter, Output } from '@angular/core';
//parce que dans liste.html,on va utiliser la balise <app-carte-evenement></app-carte-evenement>
import { CarteEvenement } from '../../composants/carte-evenement/carte-evenement';
import { Evenement } from '../../modeles/evenement';
@Component({//décorateur qui permet se déclarer un composant angular
  selector: 'app-liste',//nom de la balise html qui permet d'utiliser ce composant
  imports: [CarteEvenement],
  templateUrl: './liste.html', 
  styleUrl: './liste.css',  
})

export class Liste {
  @Output() evenementSelectionne = new EventEmitter<Evenement>();
  favoris: Evenement[] = [];
  //declaration d'un tableau qui contient les infos des evenements
  evenements:Evenement[] = [
    { id: 1, titre: 'Atelier Arduino pour débutants', description: "Initiation aux microcontrôleurs : montage et programmation d'un premier circuit.", categorie: 'atelier', club: 'Club Robotique', date: new Date('2026-12-05T14:00:00'), lieu: 'Laboratoire 2', capacite: 20, placesReservees: 12, gratuit: true },
    { id: 2, titre: 'Conférence : lancer sa startup', description: 'Des anciens étudiants racontent la création de leur entreprise.', categorie: 'conference', club: 'Club Entrepreneuriat', date: new Date('2026-12-10T10:00:00'), lieu: 'Amphi A', capacite: 120, placesReservees: 85, gratuit: true },
    //complet
    { id: 3, titre: 'Tournoi de futsal inter-classes', description: 'Tournoi par équipes de 5, phase de poules puis finale.', categorie: 'competition', club: 'Club Sport', date: new Date('2026-12-12T09:00:00'), lieu: 'Terrain couvert', capacite: 40, placesReservees: 40, gratuit: true },
    //n'a plus de place
    { id: 4, titre: 'Sortie culturelle à Carthage', description: 'Visite guidée des sites antiques, transport en bus inclus.', categorie: 'sortie', club: 'Club Découverte', date: new Date('2026-12-14T08:00:00'), lieu: 'Départ devant l\'ISET', capacite: 30, placesReservees: 29, gratuit: false },
    { id: 5, titre: 'Hackathon IA : 24 heures pour innover', description: "Par équipes, construisez un prototype autour de l'intelligence artificielle.", categorie: 'competition', club: 'Club Informatique', date: new Date('2026-12-19T09:00:00'), lieu: 'Salle Informatique 3', capacite: 50, placesReservees: 46, gratuit: true },
    { id: 6, titre: 'Atelier Git et GitHub', description: 'Travailler en équipe avec Git : branches, commits et dépôts distants.', categorie: 'atelier', club: 'Club Informatique', date: new Date('2026-12-03T15:00:00'), lieu: 'Laboratoire 1', capacite: 25, placesReservees: 10, gratuit: true },
    //deja passé
    { id: 7, titre: 'Conférence : cybersécurité au quotidien', description: 'Les bons réflexes pour protéger ses comptes et ses données.', categorie: 'conference', club: 'Club Informatique', date: new Date('2026-11-05T10:00:00'), lieu: 'Amphi B', capacite: 80, placesReservees: 52, gratuit: true },
    { id: 8, titre: 'Randonnée à Zaghouan', description: 'Journée de marche en groupe, pique-nique à prévoir.', categorie: 'sortie', club: 'Club Sport', date: new Date('2026-12-20T07:30:00'), lieu: "Départ devant l'ISET", capacite: 35, placesReservees: 20, gratuit: false },
  ];
  //méthode qui permet d'ajouter un événement aux favoris
  ajouterFavori(e: Evenement) {
    //vérifier si l'événement n'existe pas déjà dans le tableau des favoris
    if (!this.favoris.includes(e)) {
      //créer un nouveau tableau contenant les anciens favoris et le nouvel événement
      this.favoris = [...this.favoris, e];
    }
  }
  //méthode qui permet de sélectionner un événement
  selectionner(e: Evenement) {
    //envoyer l'événement sélectionné au composant parent
    this.evenementSelectionne.emit(e);
  }
}