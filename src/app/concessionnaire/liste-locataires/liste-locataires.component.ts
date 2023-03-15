import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConcessionnaireService } from 'src/app/services/concessionnaire.service';

@Component({
  selector: 'app-liste-locataires',
  templateUrl: './liste-locataires.component.html',
  styleUrls: ['./liste-locataires.component.css'],
})
export class ListeLocatairesComponent {
  listeLocataires: any;
  erreur: any;

  constructor(
    private concessionnaireService: ConcessionnaireService,
    private router: Router
  ) {}

  ngOnInit() {
    this.concessionnaireService.recupererLocataire().subscribe({
      next: (results) => {
        this.listeLocataires = results;
        //console.log(this.listeLocataires);
      },
      error: (err) => {
        console.log(err)
        alert('Erreur lors de la récupération des clients');
      },
    });
  }

  supprimerLocataire(id: number) {
    
    if (confirm('Voulez vous vraiment supprimer le compte de ce locataire')) {
      this.concessionnaireService.supprimerLocataire(id).subscribe({
        next: (result) => {
          console.log(result);
          alert('Utilisateur supprimé');
         location.reload();
          //console.log(result);
        },
        error: (err) => {
          alert('Echec de la suppression');
          this.erreur = err.error;
          alert(this.erreur);
        },
      });
    }
  }
}
