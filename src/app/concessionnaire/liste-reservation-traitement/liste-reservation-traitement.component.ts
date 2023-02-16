import { ModifierStatutLocationComponent } from './../modifier-statut-location/modifier-statut-location.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ListeLocationsStatutsService } from 'src/app/services/liste-locations-statuts.service';
import { Location } from 'src/app/model/Location';
import { Statut } from 'src/app/model/Statut';


@Component({
  selector: 'app-liste-reservation-traitement',
  templateUrl: './liste-reservation-traitement.component.html',
  styleUrls: ['./liste-reservation-traitement.component.css'],
})
export class ListeReservationTraitementComponent {
  listeLocations: Location[] = [];
  arrElements: any[] = [];

  constructor(
    private listeLocationAtraiterService: ListeLocationsStatutsService,
    private router: Router
  ) {}

  getListeReservationAtraiter() {
    this.listeLocationAtraiterService
      .recupererListLocationATraiter()
      .subscribe((locations) => {
        //console.log(locations);
        for (let element of locations) {
          this.arrElements = [];
          for (const [key, value] of Object.entries(element)) {
            this.arrElements.push(value);
          }
          //récupérer un tableau de valeurs
          let item = this.arrElements;

          let statut: Statut = new Statut(item[7].id, item[7].nom);
          let location = new Location(
            item[0],
            item[1],
            item[2],
            item[3],
            item[4],
            statut
          );
          this.listeLocations.push(location);
          //console.log(this.listeLocations);
        }
      });
  }

  newStatut(location: Location) {
    this.router.navigateByUrl('/modifier/statut', { state: location });
    //console.log(history.state);
  }

  //méthode ng on init

  ngOnInit() {
    this.getListeReservationAtraiter();
  }
}
