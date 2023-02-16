import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReservationTraitementComponent } from './liste-reservation-traitement.component';

describe('ListeReservationTraitementComponent', () => {
  let component: ListeReservationTraitementComponent;
  let fixture: ComponentFixture<ListeReservationTraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeReservationTraitementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeReservationTraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
