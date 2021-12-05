import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYourAdvisorComponent } from './know-your-advisor.component';

describe('KnowYourAdvisorComponent', () => {
  let component: KnowYourAdvisorComponent;
  let fixture: ComponentFixture<KnowYourAdvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowYourAdvisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowYourAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
