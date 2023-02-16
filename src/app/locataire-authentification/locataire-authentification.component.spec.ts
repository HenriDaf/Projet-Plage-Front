import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocataireAuthentificationComponent } from './locataire-authentification.component';

describe('LocataireAuthentificationComponent', () => {
  let component: LocataireAuthentificationComponent;
  let fixture: ComponentFixture<LocataireAuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocataireAuthentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocataireAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
