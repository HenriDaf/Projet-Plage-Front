import { TestBed } from '@angular/core/testing';

import { RecupererReservationsLocataireService } from './recuperer-reservations-locataire.service';

describe('RecupererReservationsLocataireService', () => {
  let service: RecupererReservationsLocataireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecupererReservationsLocataireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
