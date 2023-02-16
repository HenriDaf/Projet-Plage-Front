import { TestBed } from '@angular/core/testing';

import { ListeStatutsService } from './liste-statuts.service';

describe('ListeStatutsService', () => {
  let service: ListeStatutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeStatutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
