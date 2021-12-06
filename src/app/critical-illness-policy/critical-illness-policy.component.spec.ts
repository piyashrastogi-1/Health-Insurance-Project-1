import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalIllnessPolicyComponent } from './critical-illness-policy.component';

describe('CriticalIllnessPolicyComponent', () => {
  let component: CriticalIllnessPolicyComponent;
  let fixture: ComponentFixture<CriticalIllnessPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalIllnessPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalIllnessPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
