import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareActFGComponent } from './care-act-fg.component';

describe('CareActFGComponent', () => {
  let component: CareActFGComponent;
  let fixture: ComponentFixture<CareActFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareActFGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareActFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
