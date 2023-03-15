import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConcessionnaireService } from 'src/app/services/concessionnaire.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-concessionnaire-authentification',
  templateUrl: './concessionnaire-authentification.component.html',
  styleUrls: ['./concessionnaire-authentification.component.css']
})
export class ConcessionnaireAuthentificationComponent {

constructor(private concessionnaireService:ConcessionnaireService, private localService: LocalService,
  private router:Router){

}

error:any;



auth(datas:NgForm){
  this.concessionnaireService.auth(datas.value).subscribe({
    next:(response:any)=>{
      alert("Connexion effective");
  //  sessionStorage.setItem('tokenConcessionnaire',response.token);
  this.localService.saveToken(response.token);
  this.router.navigateByUrl("/concessionnaire/liste-reservation")
  
    }, error:(err)=>{
      this.error=err.error;
      console.log(err);
    
      datas.reset();
    }
  })
  }

}
