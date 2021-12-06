import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaPlansComponent } from './corona-plans.component';

describe('CoronaPlansComponent', () => {
  let component: CoronaPlansComponent;
  let fixture: ComponentFixture<CoronaPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronaPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
