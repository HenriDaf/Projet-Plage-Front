import { TestBed } from '@angular/core/testing';

import { LocalService } from './local.service';

describe('LocalService', () => {
  let service: LocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

it('it should return true if there is a locataire in the sessionStorage ', () =>{
  const service = new LocalService();
  sessionStorage.setItem('tokenLocataire','blabla');
  expect(service.locataireConnecte()).toBeTruthy();
})
it('it should return false if there is not a locataire in the sessionStorage ', () =>{
  const service = new LocalService();
 expect(service.locataireConnecte()).toBeFalsy();
})
