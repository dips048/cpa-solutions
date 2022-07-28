import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingHomeFGBComponent } from './selling-home-fg-b.component';

describe('SellingHomeFGBComponent', () => {
  let component: SellingHomeFGBComponent;
  let fixture: ComponentFixture<SellingHomeFGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingHomeFGBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingHomeFGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
