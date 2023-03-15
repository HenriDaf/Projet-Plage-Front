import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocataireService } from 'src/app/services/locataire.service';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-locataire-authentification',
  templateUrl: './locataire-authentification.component.html',
  styleUrls: ['./locataire-authentification.component.css']
})


export class LocataireAuthentificationComponent {

  constructor(private locataireService:LocataireService, private localService:LocalService, private router:Router){

  }
  error:any;


auth(datas:NgForm){
  this.locataireService.auth(datas.value).subscribe({
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
