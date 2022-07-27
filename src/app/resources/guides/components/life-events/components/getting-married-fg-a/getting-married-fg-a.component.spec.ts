import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingMarriedFGAComponent } from './getting-married-fg-a.component';

describe('GettingMarriedFGAComponent', () => {
  let component: GettingMarriedFGAComponent;
  let fixture: ComponentFixture<GettingMarriedFGAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettingMarriedFGAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingMarriedFGAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
