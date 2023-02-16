import { TestBed } from '@angular/core/testing';

import { ListeLocationsStatutsService } from './liste-locations-statuts.service';

describe('ListeLocationsStatutsService', () => {
  let service: ListeLocationsStatutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeLocationsStatutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
