import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArogyaSanjeevaniPolicyComponent } from './arogya-sanjeevani-policy.component';

describe('ArogyaSanjeevaniPolicyComponent', () => {
  let component: ArogyaSanjeevaniPolicyComponent;
  let fixture: ComponentFixture<ArogyaSanjeevaniPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArogyaSanjeevaniPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArogyaSanjeevaniPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
