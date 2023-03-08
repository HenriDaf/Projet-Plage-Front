import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';
import { AuthentificationConcessionnaireService } from '../../../services/authentification-concessionnaire.service';

@Component({
  selector: 'app-concessionnaire-authentification',
  templateUrl: './concessionnaire-authentification.component.html',
  styleUrls: ['./concessionnaire-authentification.component.css']
})
export class ConcessionnaireAuthentificationComponent {

constructor(private authenService: AuthentificationConcessionnaireService, private localService: LocalService,
  private router:Router){

}

error:any;
authentification(datas:NgForm){

this.authenService.authentifier(datas.value).subscribe({
  next:(response:any)=>{
    //console.log(response);

    alert("Connexion effective");
   // this.localService.saveData('tokenConcessionnaire','jk123');
  this.router.navigateByUrl("/listeLocataire")
  // console.log(sessionStorage.getItem('idConcessionnaire'));
  }, error:(err)=>{
    this.error=err.error;
    //console.log(err);
    datas.reset();
  }
})

}
auth(datas:NgForm){
  this.authenService.auth(datas.value).subscribe({
    next:(response:any)=>{
      alert("Connexion effective");
  //  sessionStorage.setItem('tokenConcessionnaire',response.token);
  console.log(response.token);
this.localService.saveToken(response.token);
  
    }, error:(err)=>{
      this.error=err.error;
      console.log(err);
    
      datas.reset();
    }
  })
  }

}
