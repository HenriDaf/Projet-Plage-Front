import { TestBed } from '@angular/core/testing';

import { AfficherListeUtilisateursService } from './afficher-liste-utilisateurs.service';

describe('AfficherListeUtilisateursService', () => {
  let service: AfficherListeUtilisateursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficherListeUtilisateursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
