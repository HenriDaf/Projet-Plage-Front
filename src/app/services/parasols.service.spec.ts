import { TestBed } from '@angular/core/testing';

import { ParasolsService } from './parasols.service';

describe('ParasolsService', () => {
  let service: ParasolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParasolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
