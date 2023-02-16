import { TestBed } from '@angular/core/testing';

import { LoginConcessionaireGuard } from './login-concessionaire.guard';

describe('LoginConcessionaireGuard', () => {
  let guard: LoginConcessionaireGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginConcessionaireGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
