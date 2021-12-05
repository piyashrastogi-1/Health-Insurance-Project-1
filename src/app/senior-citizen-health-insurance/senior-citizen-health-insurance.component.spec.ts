import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorCitizenHealthInsuranceComponent } from './senior-citizen-health-insurance.component';

describe('SeniorCitizenHealthInsuranceComponent', () => {
  let component: SeniorCitizenHealthInsuranceComponent;
  let fixture: ComponentFixture<SeniorCitizenHealthInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorCitizenHealthInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorCitizenHealthInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
