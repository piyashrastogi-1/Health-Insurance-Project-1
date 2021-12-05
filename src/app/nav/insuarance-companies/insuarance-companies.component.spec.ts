import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuaranceCompaniesComponent } from './insuarance-companies.component';

describe('InsuaranceCompaniesComponent', () => {
  let component: InsuaranceCompaniesComponent;
  let fixture: ComponentFixture<InsuaranceCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuaranceCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuaranceCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
