import { Statut } from './Statut';
export class Location {
  id: number;
  dateHeureDebut: Date;
  dateHeureFin: Date;
  montantAReglerEnEuros: number;
  remarques: string;
  statut: Statut;

  constructor(
    id: number,
    dateHeureDebut: Date,
    dateHeureFin: Date,
    montantAReglerEnEuros: number,
    remarques: string,
    statut: Statut
  ) {
    this.id = id;
    this.dateHeureDebut = dateHeureDebut;
    this.dateHeureFin = dateHeureFin;
    this.montantAReglerEnEuros = montantAReglerEnEuros;
    this.remarques = remarques;
    this.statut = statut;
  }
}
