import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalPlansComponent } from './critical-plans.component';

describe('CriticalPlansComponent', () => {
  let component: CriticalPlansComponent;
  let fixture: ComponentFixture<CriticalPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
