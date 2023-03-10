import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationLocataireService } from '../services/authentification-locataire.service';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-locataire-authentification',
  templateUrl: './locataire-authentification.component.html',
  styleUrls: ['./locataire-authentification.component.css']
})


export class LocataireAuthentificationComponent {

  constructor(private authentificationService:AuthentificationLocataireService, private localService:LocalService, private router:Router){

  }
  error:any;

authentification(datas: any){
this.authentificationService.authentifier(datas.value).subscribe({
  next:(results:any)=>{
//console.log(results);
alert("Connexion effective");
this.localService.saveData('tokenLocataire','jk1788');
this.localService.saveData('idLocataire', JSON.stringify(results.id));
 // console.log(results.id);
    //console.log(sessionStorage.getItem('idLocataire'));
   // sessionStorage.setItem("id",results.id);
  //console.log('id locataire '+this.localService.getData('idLocataire'));
this.router.navigateByUrl("/reservationsLocataire");

  }, error:(err)=>{
    this.error=err.error;
    datas.reset();
    //console.log(err);
  }
})
}
auth(datas:NgForm){
  this.authentificationService.auth(datas.value).subscribe({
    next:(response:any)=>{
      alert("Connexion effective");
  //  sessionStorage.setItem('tokenConcessionnaire',response.token);
  console.log(response.token)
  this.router.navigateByUrl("/reservationsLocataire");
this.localService.saveToken(response.token);
  
    }, error:(err)=>{
      this.error=err.error;
      console.log(err);
    
      datas.reset();
    }
  })
  }

}
