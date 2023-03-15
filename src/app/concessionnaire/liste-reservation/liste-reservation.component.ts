import { Location } from './../../model/Location';
import { Statut } from './../../model/Statut';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ConcessionnaireService } from 'src/app/services/concessionnaire.service';

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css'],
})
export class ListeReservationComponent {
  listeLocations: Location[] = [];
  arrElements: any[] = [];

  constructor(
    private concessionnaireService: ConcessionnaireService,
    private router: Router
  ) {}

  getListeReservation() {
    this.concessionnaireService
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
