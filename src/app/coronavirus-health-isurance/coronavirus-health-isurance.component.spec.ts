import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronavirusHealthIsuranceComponent } from './coronavirus-health-isurance.component';

describe('CoronavirusHealthIsuranceComponent', () => {
  let component: CoronavirusHealthIsuranceComponent;
  let fixture: ComponentFixture<CoronavirusHealthIsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronavirusHealthIsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronavirusHealthIsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
