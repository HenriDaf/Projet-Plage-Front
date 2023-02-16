import { TestBed } from '@angular/core/testing';
import { SupprimerLocataireService } from './supprimer-locataire.service';

describe('SupprimerLocataireService', () => {
  let service: SupprimerLocataireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupprimerLocataireService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
