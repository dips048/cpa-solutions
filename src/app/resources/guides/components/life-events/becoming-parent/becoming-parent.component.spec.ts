import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomingParentComponent } from './becoming-parent.component';

describe('BecomingParentComponent', () => {
  let component: BecomingParentComponent;
  let fixture: ComponentFixture<BecomingParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomingParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
