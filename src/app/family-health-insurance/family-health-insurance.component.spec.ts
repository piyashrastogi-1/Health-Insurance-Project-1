import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyHealthInsuranceComponent } from './family-health-insurance.component';

describe('FamilyHealthInsuranceComponent', () => {
  let component: FamilyHealthInsuranceComponent;
  let fixture: ComponentFixture<FamilyHealthInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyHealthInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyHealthInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
