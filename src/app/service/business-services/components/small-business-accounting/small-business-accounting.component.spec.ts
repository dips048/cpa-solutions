import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBusinessAccountingComponent } from './small-business-accounting.component';

describe('SmallBusinessAccountingComponent', () => {
  let component: SmallBusinessAccountingComponent;
  let fixture: ComponentFixture<SmallBusinessAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallBusinessAccountingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBusinessAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
