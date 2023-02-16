import { TestBed } from '@angular/core/testing';

import { AuthentificationLocataireService } from './authentification-locataire.service';

describe('AuthentificationLocataireService', () => {
  let service: AuthentificationLocataireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationLocataireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
