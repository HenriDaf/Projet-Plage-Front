import { Component } from '@angular/core';
import { Location } from './../../model/Location';
import { Statut } from 'src/app/model/Statut';
import { LocataireService } from 'src/app/services/locataire.service';


@Component({
  selector: 'app-liste-reservation-locataire',
  templateUrl: './liste-reservation-locataire.component.html',
  styleUrls: ['./liste-reservation-locataire.component.css']
})
export class ListeReservationLocataireComponent {

  listeReservations: Location[] = [];
  arrElements: any[]=[];
listeErreur:any;

constructor(private locataireService: LocataireService){
  
}
  ngOnInit(){
/*this.locataireService.recupererReservations().subscribe({
  next:(results)=>{
this.listeReservations=results;
//console.log("listeReservations: "+ this.listeReservations)
//console.log(typeof(this.listeReservations));
  }, error:(err)=>{
this.listeErreur=err.error;
  }
})*/

this.locataireService.recupererReservations().subscribe((locations) => {
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
    this.listeReservations.push(location);
  }
})
  }

}
