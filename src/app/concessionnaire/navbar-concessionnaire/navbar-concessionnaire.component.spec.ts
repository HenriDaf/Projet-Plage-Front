import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarConcessionnaireComponent } from './navbar-concessionnaire.component';

describe('NavbarConcessionnaireComponent', () => {
  let component: NavbarConcessionnaireComponent;
  let fixture: ComponentFixture<NavbarConcessionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarConcessionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarConcessionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
