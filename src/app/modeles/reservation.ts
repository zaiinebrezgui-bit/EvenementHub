export interface Reservation {
  id: number;
  evenementId: number;
  email: string;
  nbPlaces: number;
  telephone: string;
  dateReservation: Date;
}