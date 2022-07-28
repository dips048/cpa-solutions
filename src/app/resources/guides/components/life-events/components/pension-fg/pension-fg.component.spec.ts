import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionFGComponent } from './pension-fg.component';

describe('PensionFGComponent', () => {
  let component: PensionFGComponent;
  let fixture: ComponentFixture<PensionFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
