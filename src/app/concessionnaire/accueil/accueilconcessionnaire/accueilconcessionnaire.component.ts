import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueilconcessionnaire',
  templateUrl: './accueilconcessionnaire.component.html',
  styleUrls: ['./accueilconcessionnaire.component.css'],
})
export class AccueilconcessionnaireComponent {
  constructor(
    private router: Router
  ) {}
  redirectionAccueil() {
    this.router.navigate(['/']);
  }
}
