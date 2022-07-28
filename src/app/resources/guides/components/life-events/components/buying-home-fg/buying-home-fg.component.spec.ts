import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingHomeFGComponent } from './buying-home-fg.component';

describe('BuyingHomeFGComponent', () => {
  let component: BuyingHomeFGComponent;
  let fixture: ComponentFixture<BuyingHomeFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingHomeFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingHomeFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
