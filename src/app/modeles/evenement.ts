//définir les catégories autorisées pour un événement
export type Categorie = 'atelier' | 'conference' | 'competition' | 'sortie';
//l'interface sert à définir la structure d'un objet
export interface Evenement {
  id: number;
  titre: string;
  description: string;
  categorie: Categorie;
  club: string;
  date: Date;
  lieu: string;
  capacite: number;
  placesReservees: number;
  gratuit: boolean;
}