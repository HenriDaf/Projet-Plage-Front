import { Location } from './../../model/Location';
import { Statut } from './../../model/Statut';
import { Router } from '@angular/router';
import { ListeLocationsAllService } from './../../services/liste-locations-all.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css'],
})
export class ListeReservationComponent {
  listeLocations: Location[] = [];
  arrElements: any[] = [];

  constructor(
    private listeLocationAllService: ListeLocationsAllService,
    private router: Router
  ) {}

  getListeReservation() {
    this.listeLocationAllService
      .recupererListLocation()
      .subscribe((locations) => {
        console.log(locations);
        for (let element of locations) {
          this.arrElements = [];
          for (const [key, value] of Object.entries(element)) {
            this.arrElements.push(value);
          }
          //récupérer un tableau de valeurs
          let item = this.arrElements;
          //console.log(item);
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
        }
      });
  }

  //méthode ng on init

  ngOnInit() {
    this.getListeReservation();
  }
}
