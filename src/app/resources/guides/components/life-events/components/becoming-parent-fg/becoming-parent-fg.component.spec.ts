import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomingParentFGComponent } from './becoming-parent-fg.component';

describe('BecomingParentFGComponent', () => {
  let component: BecomingParentFGComponent;
  let fixture: ComponentFixture<BecomingParentFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomingParentFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomingParentFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
