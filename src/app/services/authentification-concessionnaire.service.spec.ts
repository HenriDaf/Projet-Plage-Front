import { TestBed } from '@angular/core/testing';

import { AuthentificationConcessionnaireService } from './authentification-concessionnaire.service';

describe('AuthentificationConcessionnaireService', () => {
  let service: AuthentificationConcessionnaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationConcessionnaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
