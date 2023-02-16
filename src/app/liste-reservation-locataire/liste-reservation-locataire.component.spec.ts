import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReservationLocataireComponent } from './liste-reservation-locataire.component';

describe('ListeReservationLocataireComponent', () => {
  let component: ListeReservationLocataireComponent;
  let fixture: ComponentFixture<ListeReservationLocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeReservationLocataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeReservationLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
