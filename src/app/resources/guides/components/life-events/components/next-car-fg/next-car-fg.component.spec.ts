import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextCarFGComponent } from './next-car-fg.component';

describe('NextCarFGComponent', () => {
  let component: NextCarFGComponent;
  let fixture: ComponentFixture<NextCarFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextCarFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextCarFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
