import { Component } from '@angular/core';
import { ParasolsService } from '../services/parasols.service';

@Component({
  selector: 'app-affichage-parasols',
  templateUrl: './affichage-parasols.component.html',
  styleUrls: ['./affichage-parasols.component.css']
})
export class AffichageParasolsComponent {
constructor(private parasolsService: ParasolsService){

}

listeParasolsLibres:any;
erreur:any;

ngOnInit(){
  this.parasolsService.recupererParasolsLibres().subscribe({
    next:(results)=>{
      this.listeParasolsLibres=results;
      console.log(this.listeParasolsLibres);
    },
    error:(err)=>{
      this.erreur=err.error;
    }
  
  })
}



}
