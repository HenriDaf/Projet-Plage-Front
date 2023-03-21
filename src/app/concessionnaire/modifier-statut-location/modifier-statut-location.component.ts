
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Statut } from 'src/app/model/Statut';
import { Location } from 'src/app/model/Location';
import { NgForm } from '@angular/forms';
import { ConcessionnaireService } from 'src/app/services/concessionnaire.service';

@Component({
  selector: 'app-modifier-statut-location',
  templateUrl: './modifier-statut-location.component.html',
  styleUrls: ['./modifier-statut-location.component.css'],
})
export class ModifierStatutLocationComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private concessionnaireService: ConcessionnaireService
  ) {}
  l: Location = history.state;
  listeStatuts: Statut[] = [];

  ngOnInit() {
    this.getStatutsListe();
  }

  //appeler la liste des pays
  getStatutsListe() {
    this.concessionnaireService.getStatuts().subscribe((statuts) => {
      for (let element of statuts) {
        if(element.nom!="à traiter"){
          let st = new Statut(element.id, element.nom);
          this.listeStatuts.push(st);
        }
        
      }
    });
  }
  //méthode à terminer
  changerStatut(formStatut: NgForm) {
    if(confirm("Etes-vous sur de modifier le statut de la location ?")){
      
  
   
    let info = formStatut.value;
console.log(info);



    if(info.statut != '' && info.id!=''){
      console.log("info: "+info);
      this.concessionnaireService.modifierStatut(info).subscribe({
        next:(results)=>{
          alert("modification du statut de la location effective");
          this.router.navigateByUrl("/concessionnaire/liste-reservation");
        },
        error:(err)=>{
          alert("erreur lors de la modification, veuillez recommencer ultérieurement");
          console.log(err);
        }
      });
    }else{
      alert("Erreur de saisie, veuillez choisir un statut dans la liste déroulante");
    }
   // console.log(info);

    

   // console.log(info);

    
  }
  }
}
