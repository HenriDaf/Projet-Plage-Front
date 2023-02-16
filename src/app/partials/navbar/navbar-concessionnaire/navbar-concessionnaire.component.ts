import { LocalService } from './../../../services/local.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-concessionnaire',
  templateUrl: './navbar-concessionnaire.component.html',
  styleUrls: ['./navbar-concessionnaire.component.css'],
})
export class NavbarConcessionnaireComponent {
  constructor(protected localService: LocalService, private router: Router) {}


  deconnexionConcessionnaire() {
   if( confirm('Etes-vous sur de vouloir vous déconnecter')){
    this.localService.clearData();

    this.router.navigateByUrl('/');
   }
   
  }
}
