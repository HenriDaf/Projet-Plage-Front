import { ModifierStatutLocationComponent } from './concessionnaire/modifier-statut-location/modifier-statut-location.component';
import { AccueilconcessionnaireComponent } from './concessionnaire/accueil/accueilconcessionnaire/accueilconcessionnaire.component';

import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConcessionnaireAuthentificationComponent } from './concessionnaire/concessionnaire-authentification/concessionnaire-authentification.component';
import { ListeLocatairesComponent } from './concessionnaire/liste-locataires/liste-locataires.component';
import { LoginConcessionaireGuard } from './guard/login-concessionaire.guard';
import { LogoutGuard } from './guard/logout.guard';
import { LocataireAuthentificationComponent } from './locataire/locataire-authentification/locataire-authentification.component';
import { InscriptionComponent } from './locataire/inscription/inscription.component';
import { ListeReservationTraitementComponent } from './concessionnaire/liste-reservation-traitement/liste-reservation-traitement.component';
import { ListeReservationComponent } from './concessionnaire/liste-reservation/liste-reservation.component';
import { ListeReservationLocataireComponent } from './locataire/liste-reservation-locataire/liste-reservation-locataire.component';
import { LoginLocataireGuard } from './guard/login-locataire.guard';
import { AffichageParasolsComponent } from './affichage-parasols/affichage-parasols.component';

const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent },

  {
    path: 'authentificationLocataire',
    component: LocataireAuthentificationComponent,
    canActivate: [LogoutGuard],
  },
  {
    path: 'reservationsLocataire',
    component: ListeReservationLocataireComponent,
    canActivate: [LoginLocataireGuard],
  },
  {
    path: 'listeParasolsLibres',
    component: AffichageParasolsComponent,
    canActivate: [LoginLocataireGuard],
  },

  //{ path: 'listeLocataire', component: ListeLocatairesComponent },

  { path: 'concessionnaire', component: AccueilconcessionnaireComponent },
  {
    path: 'authentificationConcessionnaire',
    component: ConcessionnaireAuthentificationComponent,
    canActivate: [LogoutGuard],
  },
  {
    path: 'concessionnaire/listeLocataire',
    component: ListeLocatairesComponent,
    canActivate: [LoginConcessionaireGuard],
  },
  {
    path: 'concessionnaire/liste-location/traitement',
    component: ListeReservationTraitementComponent,
    canActivate: [LoginConcessionaireGuard],
  },
  {
    path: 'concessionnaire/liste-reservation',
    component: ListeReservationComponent,
    canActivate: [LoginConcessionaireGuard],
  },
  {
    path: 'modifier/statut',
    component: ModifierStatutLocationComponent,
    canActivate: [LoginConcessionaireGuard],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export let PROJET_ROUTING = RouterModule.forRoot(myRoutes);
