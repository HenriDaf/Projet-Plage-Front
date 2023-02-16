import { TestBed } from '@angular/core/testing';
import { LoginLocataireGuard } from './login-locataire.guard';



describe('LoginAuthentificationGuard', () => {
  let guard: LoginLocataireGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginLocataireGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
