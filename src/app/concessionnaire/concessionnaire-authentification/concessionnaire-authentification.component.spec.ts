import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionnaireAuthentificationComponent } from './concessionnaire-authentification.component';

describe('ConcessionnaireAuthentificationComponent', () => {
  let component: ConcessionnaireAuthentificationComponent;
  let fixture: ComponentFixture<ConcessionnaireAuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcessionnaireAuthentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcessionnaireAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
