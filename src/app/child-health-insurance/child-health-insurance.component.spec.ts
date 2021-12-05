import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHealthInsuranceComponent } from './child-health-insurance.component';

describe('ChildHealthInsuranceComponent', () => {
  let component: ChildHealthInsuranceComponent;
  let fixture: ComponentFixture<ChildHealthInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildHealthInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildHealthInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
