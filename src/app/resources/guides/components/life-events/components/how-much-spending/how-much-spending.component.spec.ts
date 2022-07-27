import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowMuchSpendingComponent } from './how-much-spending.component';

describe('HowMuchSpendingComponent', () => {
  let component: HowMuchSpendingComponent;
  let fixture: ComponentFixture<HowMuchSpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowMuchSpendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowMuchSpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
