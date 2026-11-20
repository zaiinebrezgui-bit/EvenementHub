export interface Utilisateur {
  email: string;
  nom: string;
  role: 'etudiant' | 'organisateur';
}