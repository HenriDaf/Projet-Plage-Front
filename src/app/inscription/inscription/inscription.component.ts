import { LienDeParente } from './../../model/LienDeParente';
import { LocataireService } from './../../services/locataire.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pays } from 'src/app/model/Pays';
import { PaysService } from 'src/app/services/pays.service';
import { LienDeParenteService } from 'src/app/services/lien-de-parente.service';
import { Locataire } from 'src/app/model/Locataire';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent {
  //attributs
  listePays: Pays[] = [];
  listeLienDeParente: LienDeParente[] = [];
  erreurnom: string = '';
  erreurprenom: string = '';
  erreuremail: string = '';
  erreurpays: string = '';
  erreurpassword: string = '';
  erreurlienparente: string = '';
  errormessage: string = '';

  //regex email
  regex = new RegExp('[a-z0-9-.]+@[a-z]+.[a-z]{2,3}');

  constructor(
    private paysService: PaysService,
    private lienDeParenteService: LienDeParenteService,
    private locataireService: LocataireService,
    private router: Router
  ) {}
  //appeler lien de parente

  //méthode ng on init

  ngOnInit() {
    this.getPays();
    this.getLiendeParente();
  }

  //appeler la liste des pays
  getPays() {
    this.paysService.getPays().subscribe((pays) => {
      for (let element of pays) {
        let pays = new Pays(element.code, element.nom);
        this.listePays.push(pays);
      }
    });
  }

  //test lien de parenté
  getLiendeParente() {
    this.lienDeParenteService.getLienDeParente().subscribe((liens) => {
      //console.log(liens);
      for (let element of liens) {
        let lien = new LienDeParente(
          element.id,
          element.nom,
          element.coefficient
        );
        this.listeLienDeParente.push(lien);
      }
    });
  }

  //méthode vérification et ajout

  verificationValidations(formLogin: NgForm) {
    let infos = formLogin.value;
    console.log(infos);

    if (infos.nom == '' || infos.nom == null) {
      this.erreurnom = 'Le champ nom est vide ou invalide';
    } else if (infos.prenom == '' || infos.prenom == null) {
      this.erreurprenom = 'Le champ prénom est vide ou invalide';
    } else if (
      infos.email == '' ||
      infos.email == null ||
      this.regex.test(infos.email) == false
    ) {
      this.erreuremail = 'Le champ email est vide ou invalide';
    } else if (
      infos.password == '' ||
      infos.password == null ||
      infos.password.length < 8
    ) {
      this.erreurpassword =
        'Le champ mot de passe est vide, ne contient pas au moins 8 caractères ou il est invalide';
    } else if (infos.pays == '' || infos.pays == null) {
      this.erreurpays = 'Le pays est invalide';
    } else if (infos.lienDeParente == '' || infos.lienDeParente == null) {
      this.erreurlienparente = 'Le champ lien de parenté est invalide';
    } else {
      let locataireValide = new Locataire(
        infos.nom,
        infos.prenom,
        infos.email,
        infos.password,
        infos.pays,
        infos.lienDeParente
      );
      //console.log(locataireValide);
      //ajouter alert() pour confirmer l'inscription
      this.locataireService.ajouterLocataire(locataireValide).subscribe({
        next: () => {
          this.router.navigate(['/authentificationLocataire']);
          alert('Votre inscription a été confirmée.');
        },
        error: (err) => {
          this.gestionErreurs(err.error);
        },
      });
    }
  }

  //gestion des erreurs
  gestionErreurs(message: string): void {
    this.errormessage = message;
    this.redirectionFormulaireInscription();
  }

  //méthode de redirection
  redirectionFormulaireInscription() {
    this.router.navigate(['/inscription']);
  }
  redirectionAccueil() {
    this.router.navigate(['/']);
  }
}
