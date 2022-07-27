import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantCCAbusesComponent } from './merchant-cc-abuses.component';

describe('MerchantCCAbusesComponent', () => {
  let component: MerchantCCAbusesComponent;
  let fixture: ComponentFixture<MerchantCCAbusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantCCAbusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantCCAbusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
