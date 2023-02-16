export class Locataire {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  password: string = '';
  pays: string = '';
  lienDeParente: string = '';

  constructor(
    nom: string,
    prenom: string,
    email: string,
    password: string,
    pays: string,
    lienDeParente: string
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.pays = pays;
    this.lienDeParente = lienDeParente;
  }
}
