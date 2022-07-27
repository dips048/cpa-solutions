import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeownersInsuranceFGComponent } from './homeowners-insurance-fg.component';

describe('HomeownersInsuranceFGComponent', () => {
  let component: HomeownersInsuranceFGComponent;
  let fixture: ComponentFixture<HomeownersInsuranceFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeownersInsuranceFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeownersInsuranceFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
