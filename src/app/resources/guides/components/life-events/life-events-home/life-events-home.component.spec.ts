import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeEventsHomeComponent } from './life-events-home.component';

describe('LifeEventsHomeComponent', () => {
  let component: LifeEventsHomeComponent;
  let fixture: ComponentFixture<LifeEventsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeEventsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeEventsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
