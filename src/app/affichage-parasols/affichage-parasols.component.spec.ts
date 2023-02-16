import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageParasolsComponent } from './affichage-parasols.component';

describe('AffichageParasolsComponent', () => {
  let component: AffichageParasolsComponent;
  let fixture: ComponentFixture<AffichageParasolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageParasolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageParasolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
