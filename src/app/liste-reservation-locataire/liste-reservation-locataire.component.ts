import { Component } from '@angular/core';

import { RecupererReservationsLocataireService } from '../services/recuperer-reservations-locataire.service';

@Component({
  selector: 'app-liste-reservation-locataire',
  templateUrl: './liste-reservation-locataire.component.html',
  styleUrls: ['./liste-reservation-locataire.component.css']
})
export class ListeReservationLocataireComponent {

listeReservations:any;
listeErreur:any;

constructor(private reservationLocataireService:RecupererReservationsLocataireService){
  
}
  ngOnInit(){
this.reservationLocataireService.recupererReservations().subscribe({
  next:(results)=>{
this.listeReservations=results;
  }, error:(err)=>{
this.listeErreur=err.error;
  }
})
  }

}
