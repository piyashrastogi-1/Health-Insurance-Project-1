import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArogyaPlansComponent } from './arogya-plans.component';

describe('ArogyaPlansComponent', () => {
  let component: ArogyaPlansComponent;
  let fixture: ComponentFixture<ArogyaPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArogyaPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArogyaPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
