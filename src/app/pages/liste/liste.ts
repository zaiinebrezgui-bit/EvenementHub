import { Component } from '@angular/core';
@Component({
  selector: 'app-liste',
  standalone: true,
  templateUrl: './liste.html', 
  styleUrl: './liste.css',  
})
export class Liste {
  evenements = [
    { id: 1, titre: 'Atelier Arduino pour débutants', club: 'Club Robotique', lieu: 'Laboratoire 2', capacite: 20, placesReservees: 12 },
    { id: 2, titre: 'Conférence : lancer sa startup', club: 'Club Entrepreneuriat', lieu: 'Amphi A', capacite: 120, placesReservees: 85 },
    { id: 3, titre: 'Tournoi de futsal inter-classes', club: 'Club Sport', lieu: 'Terrain couvert', capacite: 40, placesReservees: 40 },
    { id: 4, titre: 'Atelier Git et GitHub', club: 'Club Informatique', lieu: 'Laboratoire 1', capacite: 25, placesReservees: 10 },
    { id: 5, titre: 'Hackathon Développement Web', club: 'Club Informatique', lieu: 'Salle des conférences', capacite: 60, placesReservees: 48 },
    { id: 6, titre: 'Initiation à la photographie numérique', club: 'Club Arts & Média', lieu: 'Salle B12', capacite: 15, placesReservees: 9 },
    { id: 7, titre: 'Table ronde : cybersécurité et IA', club: 'Club Sécurité', lieu: 'Amphi B', capacite: 100, placesReservees: 74 },
    { id: 8, titre: 'Journée de sensibilisation écologique', club: 'Club Environnement', lieu: 'Esplanade centrale', capacite: 80, placesReservees: 35 },
  ];
}