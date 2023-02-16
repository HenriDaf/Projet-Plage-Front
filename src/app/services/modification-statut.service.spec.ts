import { TestBed } from '@angular/core/testing';

import { ModificationStatutService } from './modification-statut.service';

describe('ModificationStatutService', () => {
  let service: ModificationStatutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificationStatutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
