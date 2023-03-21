import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './locataire/inscription/inscription.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { LocataireAuthentificationComponent } from './locataire/locataire-authentification/locataire-authentification.component';
import { ConcessionnaireAuthentificationComponent } from './concessionnaire/concessionnaire-authentification/concessionnaire-authentification.component';
import { PROJET_ROUTING } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginConcessionaireGuard } from './guard/login-concessionaire.guard';
import { TokenInterceptorProvider } from './tokeninterceptor.interceptor';
import { ListeLocatairesComponent } from './concessionnaire/liste-locataires/liste-locataires.component';
import { AccueilconcessionnaireComponent } from './concessionnaire/accueil/accueilconcessionnaire/accueilconcessionnaire.component';
import { NavbarConcessionnaireComponent } from './concessionnaire/navbar-concessionnaire/navbar-concessionnaire.component';
import { ListeReservationComponent } from './concessionnaire/liste-reservation/liste-reservation.component';
import { ListeReservationTraitementComponent } from './concessionnaire/liste-reservation-traitement/liste-reservation-traitement.component';
import { ListeReservationLocataireComponent } from './locataire/liste-reservation-locataire/liste-reservation-locataire.component';
import { ModifierStatutLocationComponent } from './concessionnaire/modifier-statut-location/modifier-statut-location.component';
import { AffichageParasolsComponent } from './affichage-parasols/affichage-parasols.component';
import { AjouterReservationComponent } from './locataire/ajouter-reservation/ajouter-reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    AccueilComponent,
    NavbarComponent,
    FooterComponent,
    LocataireAuthentificationComponent,
    ConcessionnaireAuthentificationComponent,
    ListeLocatairesComponent,
    AccueilconcessionnaireComponent,
    NavbarConcessionnaireComponent,

    ListeReservationComponent,
    ListeReservationTraitementComponent,

    ListeReservationLocataireComponent,
      ModifierStatutLocationComponent,
      AffichageParasolsComponent,
      AjouterReservationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PROJET_ROUTING,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [LoginConcessionaireGuard, TokenInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
