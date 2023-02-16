import { TestBed } from '@angular/core/testing';

import { ListeLocationsAllService } from './liste-locations-all.service';

describe('ListeLocationsAllService', () => {
  let service: ListeLocationsAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeLocationsAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
