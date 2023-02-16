import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilconcessionnaireComponent } from './accueilconcessionnaire.component';

describe('AccueilconcessionnaireComponent', () => {
  let component: AccueilconcessionnaireComponent;
  let fixture: ComponentFixture<AccueilconcessionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilconcessionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilconcessionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
