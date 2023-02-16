import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierStatutLocationComponent } from './modifier-statut-location.component';

describe('ModifierStatutLocationComponent', () => {
  let component: ModifierStatutLocationComponent;
  let fixture: ComponentFixture<ModifierStatutLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierStatutLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierStatutLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
