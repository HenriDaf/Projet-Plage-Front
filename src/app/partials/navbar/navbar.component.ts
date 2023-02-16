import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-navbar-classique',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(protected localService:LocalService, private router:Router){

}


deconnexionLocataire(){
  if( confirm('Etes-vous sur de vouloir vous déconnecter')){
    this.localService.clearData();

    this.router.navigateByUrl('/');
   }
}



}
