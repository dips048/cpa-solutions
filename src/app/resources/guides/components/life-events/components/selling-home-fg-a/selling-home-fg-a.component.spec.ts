import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingHomeFGAComponent } from './selling-home-fg-a.component';

describe('SellingHomeFGAComponent', () => {
  let component: SellingHomeFGAComponent;
  let fixture: ComponentFixture<SellingHomeFGAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingHomeFGAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingHomeFGAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
