export class LienDeParente {
  id: number;
  nom: string;
  coefficient: number;

  constructor(id: number, nom: string, coefficient: number) {
    this.id = id;
    this.nom = nom;
    this.coefficient = coefficient;
  }
}
