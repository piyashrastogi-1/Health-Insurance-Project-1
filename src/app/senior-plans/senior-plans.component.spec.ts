import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorPlansComponent } from './senior-plans.component';

describe('SeniorPlansComponent', () => {
  let component: SeniorPlansComponent;
  let fixture: ComponentFixture<SeniorPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
