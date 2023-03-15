import { Component } from '@angular/core';
import { LocataireService } from 'src/app/services/locataire.service';


@Component({
  selector: 'app-liste-reservation-locataire',
  templateUrl: './liste-reservation-locataire.component.html',
  styleUrls: ['./liste-reservation-locataire.component.css']
})
export class ListeReservationLocataireComponent {

listeReservations:any;
listeErreur:any;

constructor(private locataireService: LocataireService){
  
}
  ngOnInit(){
this.locataireService.recupererReservations().subscribe({
  next:(results)=>{
this.listeReservations=results;
console.log("listeReservations: "+ results)
  }, error:(err)=>{
this.listeErreur=err.error;
  }
})
  }

}
