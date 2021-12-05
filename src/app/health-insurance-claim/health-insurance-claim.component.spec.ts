import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthInsuranceClaimComponent } from './health-insurance-claim.component';

describe('HealthInsuranceClaimComponent', () => {
  let component: HealthInsuranceClaimComponent;
  let fixture: ComponentFixture<HealthInsuranceClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthInsuranceClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthInsuranceClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
